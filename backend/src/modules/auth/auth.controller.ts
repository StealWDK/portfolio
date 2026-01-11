import { Request, Response } from 'express';
import { authService } from './auth.service';
import { asyncHandler } from '../../utils/asyncHandler';

export const login = asyncHandler(async (req: Request, res: Response) => {
  const { email, password } = req.body;
  
  if (!email || !password) {
    return res.status(400).json({
      success: false,
      error: { code: 'BAD_REQUEST', message: 'Email and password required' }
    });
  }

  const result = await authService.login(email, password);
  
  if (!result) {
    return res.status(401).json({
      success: false,
      error: { code: 'UNAUTHORIZED', message: 'Invalid credentials' }
    });
  }
  
  res.json({
    success: true,
    data: result
  });
});

export const refreshToken = asyncHandler(async (req: Request, res: Response) => {
  const { refreshToken } = req.body;
  
  if (!refreshToken) {
    return res.status(400).json({
      success: false,
      error: { code: 'BAD_REQUEST', message: 'Refresh token required' }
    });
  }

  const result = await authService.refresh(refreshToken);
  
  if (!result) {
    return res.status(401).json({
      success: false,
      error: { code: 'INVALID_TOKEN', message: 'Invalid or expired refresh token' }
    });
  }
  
  res.json({
    success: true,
    data: result
  });
});

export const getMe = asyncHandler(async (req: Request, res: Response) => {
  res.json({
    success: true,
    data: { user: req.user }
  });
});
