import {Router} from 'express';
import getProductsPublic from '../../controllers/public/products/get.controller.js';

const publicRouter = Router();

publicRouter.get('/products',getProductsPublic)

export default publicRouter