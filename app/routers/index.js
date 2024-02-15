import {Router} from 'express';
import authRouter from './authentication/auth.router.js';
import adminRouter from './admin/admin.router.js';
import publicRouter from './public/public.router.js'
import userRouter from './user/user.router.js';

const mainRouter = Router();


mainRouter.use('/auth',authRouter)
mainRouter.use('/admin',adminRouter)
mainRouter.use('/public',publicRouter)
mainRouter.use('/user',userRouter)

mainRouter.use('/version' ,(req, res) => res.send('1.0.0'))

mainRouter.use((err, req, res, next) => {

    if(err.http_code || err.name == 'MulterError')
        res.status(400).json({message:err.message})
    else
        res.status(500).send('Something broke!')
})
export default mainRouter