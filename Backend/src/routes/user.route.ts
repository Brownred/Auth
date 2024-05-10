import express from 'express';
import { test } from '../controllers/user.controller';

const userRouter = express.Router();

userRouter.get('/', test);

export default userRouter;