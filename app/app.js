import express from 'express';
import cors from 'cors';

import mainRouter from './routers/index.js';

const app = express();

app.use(express.json());
app.use(cors());


app.use('/api', mainRouter)



export default app;