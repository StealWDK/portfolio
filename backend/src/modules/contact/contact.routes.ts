import { Router } from 'express';
import { submitContactForm, getContactSubmissions } from './contact.controller';
import { authenticate, authorize } from '../../middleware/authenticate';

const router = Router();

// Public
router.post('/submit', submitContactForm);

// Admin only
router.get('/', authenticate, authorize('ADMIN', 'SUPER_ADMIN'), getContactSubmissions);

export default router;