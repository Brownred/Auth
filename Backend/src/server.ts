import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import userRoute from './routes/user.route';

dotenv.config();

const mongoURI = process.env.MONGO_URI;

if (!mongoURI) {
    throw new Error('lol :) MONGO_URI is not defined');
}

mongoose.connect(mongoURI)
    .then(() => { console.log('connected to mongodb :)') })
    .catch((err) => { console.log("opps! :( ", err) });

const app = express();

app.use("/api/user", userRoute);

app.listen(3000, () => {
    console.log('server listening on http://localhost:3000');
});