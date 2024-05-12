import { NextFunction, Request, Response } from 'express';
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/user.models';
import { MongoError } from 'mongodb';
import { errorHandler } from '../utils/error';

export const signUp = async (req: Request, res: Response, next: NextFunction) => {
    const { username, email, password } = req.body;
    const hashedPassword = bcryptjs.hashSync(password, 10);
    const newUser = new User({ username, password: hashedPassword, email });
    try {
        await newUser.save();
        res.status(201).json({ message: 'User Created successfully!' });
    } catch (error) {
        if (error instanceof MongoError && error.code === 11000) {
            next(errorHandler(400, 'Username or email already exists'));
        } else {
            next(errorHandler(500, 'Something went wrong'));
        }
    }
};

export const login = async (req: Request, res: Response, next: NextFunction) => {
    const { email, password } = req.body;

    try {
        const validUser = await User.findOne({ email });
        if (!validUser) return next(errorHandler(404, " Haaa! User not found"));
        const validPassword = bcryptjs.compareSync(password, validUser.password);
        if (!validPassword) return next(errorHandler(401, "Wrong credentials"));
        if (!process.env.JWT_SECRET) return next(errorHandler(500, "Internal server error"));
        const token = jwt.sign({ id: validUser._id?.toString(), name: validUser.username }, process.env.JWT_SECRET);
        const { password: hashedPassword, ...rest } = validUser.toObject();
        res.cookie("accessToken", token, { httpOnly: true, maxAge: 2 * 24 * 60 * 60 * 1000 }).status(200).json(rest);
    } catch (error) {
        next(errorHandler(500, " Haaa! User not found"));
    }
};