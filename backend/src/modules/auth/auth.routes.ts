import { Router } from 'express';
import { login, refreshToken, getMe } from './auth.controller';
import { authenticate } from '../../middleware/authenticate';

const router = Router();

router.post('/login', login);
router.post('/refresh', refreshToken);
router.get('/me', authenticate, getMe);

export default router;