import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const mongoURI = process.env.MONGO_URI;

if (!mongoURI) {
    throw new Error('lol :) MONGO_URI is not defined');
}

mongoose.connect(mongoURI);

const app = express();

app.listen(3000, () => {
    console.log('server listening on port 3000');
});