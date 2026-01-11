import { Request, Response } from 'express';
import { contactService } from './contact.service';
import { asyncHandler } from '../../utils/asyncHandler';
import { sendEmail } from '../../config/email';

export const submitContactForm = asyncHandler(async (req: Request, res: Response) => {
  const { name, email, phone, message, serviceType, language } = req.body;
  
  const ipAddress = req.ip || req.connection.remoteAddress || '';
  const userAgent = req.get('user-agent') || '';
  
  // Save to database
  const submission = await contactService.createSubmission({
    name,
    email,
    phone,
    message,
    serviceType,
    language,
    ipAddress,
    userAgent,
    source: req.get('referer') || 'direct'
  });
  
  // Send email to admin
  // Wrap in try-catch to not fail the request if email fails (optional, depending on requirements)
  try {
    await sendEmail({
      to: process.env.ADMIN_EMAIL!,
      subject: `New Contact Form Submission - ${serviceType}`,
      template: 'admin-contact-notification',
      data: {
        name,
        email,
        phone,
        message,
        serviceType,
        language,
        submissionId: submission.id
      }
    });
    
    // Send confirmation email to customer
    await sendEmail({
      to: email,
      subject: language === 'RO' ? 
        'Confirmare primire mesaj' : 
        'Confirmation of message receipt',
      template: 'customer-confirmation',
      data: { name, language }
    });
  } catch (error) {
    console.error('Email sending failed:', error);
  }
  
  res.status(201).json({
    success: true,
    message: language === 'RO' ? 
      'Mesajul dvs. a fost trimis cu succes!' : 
      'Your message was sent successfully!',
    data: {
      id: submission.id,
      createdAt: submission.createdAt
    }
  });
});

export const getContactSubmissions = asyncHandler(async (req: Request, res: Response) => {
  const { status, page = 1, limit = 20 } = req.query;
  
  const submissions = await contactService.getSubmissions({
    status: status as string,
    page: Number(page),
    limit: Number(limit)
  });
  
  res.json({
    success: true,
    data: submissions.data,
    pagination: submissions.pagination
  });
});
