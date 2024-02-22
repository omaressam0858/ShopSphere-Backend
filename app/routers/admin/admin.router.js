import adminMiddleware from '../../middlewares/authentication/admin.middleware.js';
import verifyMiddleware from '../../middlewares/authentication/verify.middleware.js';

import createProduct from '../../controllers/admin/products/create.controller.js';
import updateProduct from '../../controllers/admin/products/update.controller.js';
import getProducts from '../../controllers/admin/products/get.controller.js';

import {getAllOrders,getSingleOrder} from '../../controllers/admin/orders/get.controller.js';

import multer from 'multer';
import photoStorage from '../../storage/photo.storage.js';


import {Router} from 'express';

const adminRouter = Router();

adminRouter.use(verifyMiddleware);
adminRouter.use(adminMiddleware);

adminRouter.post('/products',multer({storage: photoStorage}).single('image'),createProduct);
adminRouter.put('/products/:id',updateProduct);
adminRouter.get('/products',getProducts);

adminRouter.get('/orders',getAllOrders);
adminRouter.get('/orders/:id',getSingleOrder);

export default adminRouter