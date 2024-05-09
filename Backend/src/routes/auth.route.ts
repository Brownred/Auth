import express, { Request, Response } from 'express';
import bcryptjs from 'bcryptjs';
import User from '../models/user.models';
import { MongoError } from 'mongodb';
import { errorHandler } from '../utils/error';
// import { signUp } from '../controllers/auth.controleler';

const authRouter = express.Router();

authRouter.post("/signup", async (req, res, next) => {
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
});

export default authRouter;
