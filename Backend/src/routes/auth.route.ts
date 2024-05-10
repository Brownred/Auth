import express, { Request, Response } from 'express';
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';
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

authRouter.post("/login", async (req, res, next) => {
    const { username, password } = req.body;

    try {
        const validUser = await User.findOne({ username });
        if (!validUser) return next(errorHandler(404, "User not found"));
        const validPassword = bcryptjs.compareSync(password, validUser.password);
        if (!validPassword) return next(errorHandler(401, "Wrong credentials"));
        if (!process.env.JWT_SECRET) return next(errorHandler(500, "Internal server error"));
        const token = jwt.sign({ id: validUser._id?.toString(), name: validUser.username }, process.env.JWT_SECRET, { expiresIn: "2d" });
        const { password: hashedPassword, __v, ...rest } = validUser;
        res.cookie("accessToken", token, { httpOnly: true }).status(200).json(rest);
    } catch (error) {
        next(error);
    }
});

export default authRouter;
