import { Router } from 'express';
import { auctionedItemsRoutes } from './items.js';

const router = Router();
router.use('./items', auctionedItemsRoutes);

export default router;