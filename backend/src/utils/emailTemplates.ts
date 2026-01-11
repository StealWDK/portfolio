export const renderEmailTemplate = (template: string, data: any): string => {
  // Simple placeholder. In real app, use Handlebars or EJS.
  if (template === 'customer-confirmation') {
    return `
      <div style="font-family: Arial, sans-serif; padding: 20px;">
        <h1>${data.language === 'RO' ? 'Confirmare' : 'Confirmation'}</h1>
        <p>Hello ${data.name},</p>
        <p>${data.language === 'RO' 
          ? 'Am primit mesajul dvs. și vă vom contacta în curând.' 
          : 'We received your message and will contact you soon.'}</p>
        <p>Best regards,<br>Home Repair Team</p>
      </div>
    `;
  }
  if (template === 'admin-contact-notification') {
    return `
      <div style="font-family: Arial, sans-serif; padding: 20px;">
        <h1>New Contact Form Submission</h1>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <p><strong>Service:</strong> ${data.serviceType}</p>
        <hr>
        <p><strong>Message:</strong></p>
        <p>${data.message}</p>
        <p><small>ID: ${data.submissionId}</small></p>
      </div>
    `;
  }
  return `<p>Notification</p>`;
};
