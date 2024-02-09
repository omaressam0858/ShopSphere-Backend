import registerController from '../../controllers/authentication/register.controller.js';
import loginController from '../../controllers/authentication/login.controller.js';

import {Router} from 'express';

const authRouter = Router();


authRouter.post('/register', registerController)
authRouter.post('/login', loginController)

export default authRouter