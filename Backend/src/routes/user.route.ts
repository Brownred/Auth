import express from 'express';
// import { test } from '../controllers/user.controller';

const userRouter = express.Router();

userRouter.get('/', (req, res) => {
    res.json({ message: 'Hello World!' });
});

export default userRouter;