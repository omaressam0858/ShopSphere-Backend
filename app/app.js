import express from 'express';
import cors from 'cors';

import mainRouter from './routers/index.js';
import callbackRouter from './routers/callback/callback.router.js';

const app = express();

app.use(cors());


app.use('/api',express.json(), mainRouter)
app.use('/callback',express.raw({type:'application/json'}),callbackRouter)



export default app;