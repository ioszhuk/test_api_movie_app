import * as dotenv from 'dotenv';
dotenv.config();
import helmet from 'helmet';
import cors from 'cors';
import mongoose from 'mongoose';
import express, {Express} from 'express';
import {mongoConnectionUrl, helmetOptions, corsOptions} from './src/config';
import {mainRouter} from './src/routers/mainRouter';

const app: Express = express();

app.use(helmet(helmetOptions));
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.static('public'));

app.use(mainRouter);

async function start() {
  try {
    await mongoose.connect(mongoConnectionUrl);

    app.listen(process.env.PORT, (): void => {
      console.log('App run on port:', process.env.PORT);
    });
  } catch (error: any) {
    console.log('TOTAL ERROR:', error.message);
  }
}

start();
