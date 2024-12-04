import { Request, Response } from 'express';
import { User } from '../../models/index.js'

export const getAllUsers = async (_req: Request, res: Response) => { 
    try {
        const users = await User.findAll();
        res.status(200).json(users);
    } catch(error: any) {
        res.status(500).json({
            message: error.message
        });
    }
};

export const activateUser = async(req: Request, res: Response) => {
    try {
        const users = await User.findAll({
            where: {
                username: req.params.username,
            }
        });
        if (!users || users.length == 0) {
            return res.status(404).json({message: "No user was found with that username"});
        }
        const user = users[0];
        user.update("isActive", true)
        user.save();
        res.status(200).json(user);
    } catch(error: any) {
        res.status(500).json({
            message: error.message
        });
    }
    return
}