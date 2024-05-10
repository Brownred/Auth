import express, { Request, Response } from 'express';

import { login, signUp } from '../controllers/auth.controleler';

const authRouter = express.Router();

authRouter.post("/signup", signUp);

authRouter.post("/login", login);

export default authRouter;
