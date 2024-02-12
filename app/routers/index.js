import {Router} from 'express';
import authRouter from './authentication/auth.router.js';
import adminRouter from './admin/admin.router.js';

const mainRouter = Router();


mainRouter.use('/auth',authRouter)
mainRouter.use('/admin',adminRouter)

mainRouter.use('/version' ,(req, res) => res.send('1.0.0'))

mainRouter.use((err, req, res, next) => {

    if(err.http_code || err.name == 'MulterError')
        res.status(400).json({message:err.message})
    else
        res.status(500).send('Something broke!')
})
export default mainRouter