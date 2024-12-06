import { Router } from 'express';
import adminRoutes from './admin/index.js';
import authRoutes from './auth/index.js';
import itemsRoutes from './items/index.js';

const router = Router();
router.use('/admin', adminRoutes);
router.use('/auth', authRoutes);
router.use('/items', itemsRoutes);

export default router;