import {Router} from 'express';
import authRouter from './authentication/auth.router.js';


const mainRouter = Router();


mainRouter.use('/auth',authRouter)

mainRouter.use('/version' ,(req, res) => res.send('1.0.0'))
export default mainRouter