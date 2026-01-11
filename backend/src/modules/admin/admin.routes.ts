import { Router } from 'express';

const router = Router();

// Routes will be added here
router.get('/', (req, res) => res.json({ message: 'Admin module' }));

export default router;
