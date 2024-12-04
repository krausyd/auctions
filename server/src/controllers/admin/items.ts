import { Request, Response } from 'express';
import { AuctionedItem } from '../../models/index.js';

export const getAllAuctionedItems = async(_req: Request, res: Response) => { 
    try {
        const auctionedItems = await AuctionedItem.findAll();
        res.json(auctionedItems);
    } catch(error: any) {
        res.status(500).json({
            message: error.message
        });
    }
};

export const getAuctionedItemById = async(req: Request, res: Response) => {
    try {
        const auctionedItem = await AuctionedItem.findByPk(req.params.itemId);
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

export const addAuctiontedItem = async (req: Request, res: Response) => {
    try {
        const { auctionedItem } = req.body;
        const newItem = await AuctionedItem.create(auctionedItem);
        res.status(201).json(newItem);
    } catch(error: any) {
        res.status(500).json({
            message: error.message
        });
    }
};

export const updateAuctionedItem = async (req: Request, res: Response) => {
    try {
        const itemToUpdate = await AuctionedItem.findByPk(req.params.itemId)
        if (!itemToUpdate) {
            return res.status(404).json({
                message: 'Auctioned item not found'
            });
        }
        await itemToUpdate.update(req.body);
        await itemToUpdate.save()
        res.status(200).json(itemToUpdate);

    } catch(error: any) {
        res.status(500).json({
            message: error.message
        });
    }
    return;
};

export const deleteAuctionedItem = async (req: Request, res: Response) => {
    try {
        const item = await AuctionedItem.findByPk(req.params.itemId);
        if (!item) {
            return res.status(404).json({
                message: 'Auctioned item not found'
            });
        }
        await item.destroy();
        res.status(200);
    } catch(error: any) {
        res.status(500).json({
            message: error.message
        });
    }
    return;
};