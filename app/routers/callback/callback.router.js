import {Router} from 'express';
import paymentController from '../../controllers/callback/payment.controller.js';

const callbackRouter = Router();

callbackRouter.post('/payment/success',paymentController)

callbackRouter.get('/payment/test', (req, res) => res.send('test'))
export default callbackRouter