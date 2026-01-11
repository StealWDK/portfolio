import { prisma } from '../../config/database';
import { ServiceType, Language, Prisma } from '@prisma/client';

export const contactService = {
  createSubmission: async (data: {
    name: string;
    email: string;
    phone: string;
    message: string;
    serviceType: ServiceType;
    language: Language;
    ipAddress: string;
    userAgent: string;
    source: string;
  }) => {
    return prisma.contactSubmission.create({
      data
    });
  },

  getSubmissions: async ({ status, page, limit }: { status?: string; page: number; limit: number }) => {
    const where: Prisma.ContactSubmissionWhereInput = status ? { status: status as any } : {};
    
    const [total, data] = await Promise.all([
      prisma.contactSubmission.count({ where }),
      prisma.contactSubmission.findMany({
        where,
        skip: (page - 1) * limit,
        take: limit,
        orderBy: { createdAt: 'desc' }
      })
    ]);

    return {
      data,
      pagination: {
        total,
        page,
        limit,
        pages: Math.ceil(total / limit)
      }
    };
  }
};
