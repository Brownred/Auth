import express, { Request, Response } from 'express';
import bcryptjs from 'bcryptjs';
import User from '../models/user.models';
import { MongoError } from 'mongodb';
// import { signUp } from '../controllers/auth.controleler';

const authRouter = express.Router();

authRouter.post("/signup", async (req, res) => {
    const { username, email, password } = req.body;
    const hashedPassword = bcryptjs.hashSync(password, 10); 
    const newUser = new User({ username, password: hashedPassword, email });
    try {
        await newUser.save();
        res.status(201).json({ message: 'User Created successfully!' });
    } catch (error) {
        if (error instanceof MongoError && error.code === 11000) {
            res.status(400).json({ message: 'Username or email already exists' });
        } else {
            res.status(500).json({ message: 'Something went wrong' });
        }
    }
});

export default authRouter;
