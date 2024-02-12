import adminMiddleware from '../../middlewares/authentication/admin.middleware.js';
import verifyMiddleware from '../../middlewares/authentication/verify.middleware.js';

import createProduct from '../../controllers/admin/products/create.controller.js';

import multer from 'multer';
import photoStorage from '../../storage/photo.storage.js';


import {Router} from 'express';

const adminRouter = Router();

adminRouter.use(verifyMiddleware);
adminRouter.use(adminMiddleware);

adminRouter.post('/products',multer({storage: photoStorage}).single('image'),createProduct);

export default adminRouter