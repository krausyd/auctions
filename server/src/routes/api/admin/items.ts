import { Router } from 'express';
const router = Router();
import {
    getAllAuctionedItems,
    getAuctionedItemById,
    addAuctiontedItem,
    updateAuctionedItem,
    deleteAuctionedItem,
} from '../../../controllers/admin/items.js';

router.route('/').get(getAllAuctionedItems).post(addAuctiontedItem);
router
  .route('/:itemId')
  .get(getAuctionedItemById)
  .put(updateAuctionedItem)
  .delete(deleteAuctionedItem);

export { router as auctionedItemsRoutes };