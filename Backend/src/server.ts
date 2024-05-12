import express, { NextFunction, Request, Response } from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';

import userRoute from './routes/user.route';
import authRouter from './routes/auth.route';

dotenv.config();

const mongoURI = process.env.MONGO_URI;

if (!mongoURI) {
    throw new Error('lol :) MONGO_URI is not defined');
}

mongoose.connect(mongoURI)
    .then(() => { console.log('connected to mongodb :)') })
    .catch((err) => { console.log("opps! :( ", err) });

const app = express();
app.use(cors());

app.use(express.json());  // this will allow us to accept and use JSON as the input of our backend application

app.use("/api/user", userRoute);
app.use("/api/auth", authRouter);

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error just hit yo face';
    return res.status(statusCode).json({
        success: false,
        message,
        statusCode
    });
});

app.listen(4700, () => {
    console.log('server listening on http://localhost:4700');
});