import { Request, Response } from 'express';
import { User } from '../../models/index.js'
import jwt from 'jsonwebtoken';

export const createUser = async (req: Request, res: Response) => {
    const { user } = req.body;
    try {
        if (user.role.toLower() !== 'admin' || user.role.toLower() !== 'mortal' || user.role.toLower() !== 'krausyd' ) {
            return res.status(400).json({
                message: "User's role is invalid"
            });
        }
        const newUser = await User.create(user);
        res.status(201).json(newUser);
    } catch(error: any) {
        res.status(500).json({
            message: error.message
        });
    }
    return;
};

export const login = async (req: Request, res: Response) => {
    const { username, password } = req.body;
    try {
        const users = await User.findAll({
            where: {
                username: username,
            }
        });
        if (!users || users.length == 0 || !users[0].isValidPassword(password)) {
            return res.status(401).json({message: "Authentication failed"});
        }
        const secretKey = process.env.JWT_SECRET_KEY || '';
        const isAdmin = users[0].role.toLowerCase() === "admin" || users[0].role.toLowerCase() === "krausyd";

        const token = jwt.sign({ username, isAdmin }, secretKey, { expiresIn: '1h' });
        return res.json({ token });

    } catch(error: any) {
        res.status(500).json({
            message: error.message
        });
    }
    return;
};