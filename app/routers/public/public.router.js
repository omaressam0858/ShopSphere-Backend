import {Router} from 'express';
import getProductsPublic from '../../controllers/public/products/get.controller.js';
import getSpecificProductPublic from '../../controllers/public/products/getSpecific.controller.js';
const publicRouter = Router();

publicRouter.get('/products',getProductsPublic)
publicRouter.get('/products/:id',getSpecificProductPublic)

export default publicRouter