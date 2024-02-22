import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

import mainRouter from './routers/index.js';
import callbackRouter from './routers/callback/callback.router.js';


const app = express();

app.use(cors());


app.use('/api',express.json(), mainRouter)
app.use('/callback',express.raw({type:'application/json'}),callbackRouter)


app.use((req, res, next) => {
    res.status(404).json({message:"Not Found"})
})

export default app;