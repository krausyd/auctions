import { Router } from 'express';
const router = Router();
import {
    getAllAuctionedItems,
    getAuctionedItemById,
    addAuctiontedItem,
    updateAuctionedItem,
    deleteAuctionedItem,
} from '../../../controllers/admin/items.js';
import {
  getAllPushes,
  getAllPushesForProductId,
  getLastPushForProductId
} from '../../../controllers/admin/pushes.js';

router.route('/').get(getAllAuctionedItems).post(addAuctiontedItem);
router.route('/pushes').get(getAllPushes);
router
  .route('/:itemId')
  .get(getAuctionedItemById)
  .put(updateAuctionedItem)
  .delete(deleteAuctionedItem);

router.route('/:itemId/pushes').get(getAllPushesForProductId);
router.route('/:itemId/last').get(getLastPushForProductId);

export { router as auctionedItemsRoutes };