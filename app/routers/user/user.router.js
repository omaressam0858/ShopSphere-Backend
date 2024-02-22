import {Router} from 'express';
import verifyMiddleware from '../../middlewares/authentication/verify.middleware.js';

import CheckoutController from '../../controllers/user/checkout.controller.js';
import { getUserOrders } from '../../controllers/user/orders.controller.js';
import { getUserProfile, updateUserProfile } from '../../controllers/user/profile.controller.js';

const userRouter = Router();
userRouter.use(verifyMiddleware)

userRouter.post('/checkout',CheckoutController)
userRouter.get('/orders',getUserOrders)

userRouter.get('/profile',getUserProfile)
userRouter.put('/profile',updateUserProfile)

export default userRouter