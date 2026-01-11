import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { prisma } from '../../config/database';

export const authService = {
  login: async (email: string, password: string) => {
    const admin = await prisma.admin.findUnique({ where: { email } });
    if (!admin || !admin.isActive) return null;

    const isValid = await bcrypt.compare(password, admin.passwordHash);
    if (!isValid) return null;

    const accessToken = jwt.sign(
      { userId: admin.id, type: 'access' },
      process.env.JWT_ACCESS_SECRET!,
      { expiresIn: (process.env.JWT_ACCESS_EXPIRES_IN || '15m') as any }
    );

    const refreshToken = jwt.sign(
      { userId: admin.id, type: 'refresh' },
      process.env.JWT_REFRESH_SECRET!,
      { expiresIn: (process.env.JWT_REFRESH_EXPIRES_IN || '7d') as any }
    );

    await prisma.admin.update({
      where: { id: admin.id },
      data: { lastLoginAt: new Date() }
    });

    return { 
      user: {
        id: admin.id,
        email: admin.email,
        firstName: admin.firstName,
        lastName: admin.lastName,
        role: admin.role
      },
      accessToken, 
      refreshToken 
    };
  },

  refresh: async (token: string) => {
    try {
      const decoded = jwt.verify(token, process.env.JWT_REFRESH_SECRET!) as any;
      if (decoded.type !== 'refresh') throw new Error('Invalid token type');

      const admin = await prisma.admin.findUnique({ where: { id: decoded.userId } });
      if (!admin || !admin.isActive) throw new Error('User not found');

      const accessToken = jwt.sign(
        { userId: admin.id, type: 'access' },
        process.env.JWT_ACCESS_SECRET!,
        { expiresIn: (process.env.JWT_ACCESS_EXPIRES_IN || '15m') as any }
      );

      return { accessToken };
    } catch (error) {
      return null;
    }
  }
};
