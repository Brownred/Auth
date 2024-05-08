import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

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

app.use(express.json());  // this will allow us to accept and use JSON as the input of our backend application

app.use("/api/user", userRoute);
app.use("/api/auth", authRouter);

app.listen(3000, () => {
    console.log('server listening on http://localhost:3000');
});