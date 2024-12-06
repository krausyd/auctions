import { Request, Response } from 'express';
import { AuctionedItem, Push } from '../../models/index.js';

export const getAllAuctionedItems = async(_req: Request, res: Response) => { 
    try {
        const auctionedItems = await AuctionedItem.findAll({
            attributes: ['id', 'description', 'photo_url']
        });
        res.json(auctionedItems);
    } catch(error: any) {
        res.status(500).json({
            message: error.message
        });
    }
};

export const getAuctionedItemById = async(req: Request, res: Response) => {
    try {
        const auctionedItem = await AuctionedItem.findByPk(req.params.itemId,
            {
                attributes: {
                    exclude: ['start_price']
                }
            }
        );
        if (auctionedItem) {
            res.json(auctionedItem)
        } else {
            res.status(404).json({
                message: 'Auctioned item not found'
            });
        }
    } catch(error: any) {
        res.status(500).json({
            message: error.message
        });
    }
};

export const getLastPriceForAuctionedItem = async(req: Request, res: Response) => {
    try {
        const auctionedItem = await AuctionedItem.findByPk(req.params.itemId);
        if (auctionedItem) {
            res.json(auctionedItem)
        } else {
            res.status(404).json({
                message: 'Auctioned item not found'
            });
        }
        const push = await Push.findAll({
            where: {
                product_id: req.params.itemId,
            },
            attributes: [
                'amount'
            ],
            order: [
                ['createdAt', 'DESC'] 
            ],
            limit: 1
        });
        res.status(200).json(push);
    } catch(error: any) {
        res.status(500).json({
            message: error.message
        });
    }
};