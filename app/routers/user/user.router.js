import {Router} from 'express';
import verifyMiddleware from '../../middlewares/authentication/verify.middleware.js';

import CheckoutController from '../../controllers/user/checkout.controller.js';

const userRouter = Router();
userRouter.use(verifyMiddleware)

userRouter.post('/checkout',CheckoutController)


export default userRouter