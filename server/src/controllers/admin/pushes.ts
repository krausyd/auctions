import { Request, Response } from 'express';
import { Push } from '../../models/index.js'

export const getAllPushes = async(_req: Request, res: Response) => { 
    try {
        const pushes = await Push.findAll();
        res.status(200).json(pushes);
    } catch(error: any) {
        res.status(500).json({
            message: error.message
        });
    }
};

export const getAllPushesForProductId = async(req: Request, res: Response) => { 
    try {
        const pushes = await Push.findAll({
            where: {
                product_id: req.params.itemId,
            },
        });
        res.status(200).json(pushes);
    } catch(error: any) {
        res.status(500).json({
            message: error.message
        });
    }
};

export const getLastPushForProductId = async(req: Request, res: Response) => { 
    try {
        const push = await Push.findAll({
            where: {
                product_id: req.params.itemId,
            },
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

