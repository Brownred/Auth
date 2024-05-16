import express, { Request, Response } from 'express';

import { login, signUp } from '../controllers/auth.controleler';

const authRouter = express.Router();

authRouter.post("/log-in", login);

authRouter.post("/signup", signUp);

authRouter.post("/google", google); //create a function inside auth controller


export default authRouter;
