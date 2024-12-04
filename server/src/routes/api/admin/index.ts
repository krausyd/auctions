import { Router } from 'express';
import { auctionedItemsRoutes } from './items.js';
import { userRoutes } from './users.js'

const router = Router();
router.use('/items', auctionedItemsRoutes);
router.use('/users', userRoutes);

export default router;