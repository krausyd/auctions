import { Router } from 'express';
const router = Router();
import {
    getAllAuctionedItems,
    getAuctionedItemById,
    getLastPriceForAuctionedItem,
} from '../../../controllers/users/items.js';

router.route('/').get(getAllAuctionedItems);
router.route('/:itemId').get(getAuctionedItemById);
router.route('/:itemId/lastPrice').get(getLastPriceForAuctionedItem);

export { router as auctionedItemsRoutes };
