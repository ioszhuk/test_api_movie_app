import * as dotenv from 'dotenv';

dotenv.config();

import cors from 'cors';
import {HelmetOptions} from 'helmet';

const MONGO_USER = process.env.MONGODB_USER || '';
const MONGO_PASSWORD = process.env.MONGODB_PASSWORD || '';
const MONGO_CLUSTER = process.env.MONGODB_CLUSTER || '';
const MONGO_DATABASE = process.env.MONGODB_DATABASE || '';

const MONGO_URL = `mongodb+srv://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_CLUSTER}.mongodb.net/${MONGO_DATABASE}`;

const SERVER_PORT = process.env.PORT ? Number(process.env.PORT) : 8080;

const HELMET_OPTIONS: HelmetOptions = {
  crossOriginResourcePolicy: {
    policy: 'cross-origin'
  }
};

const CORS_OPTIONS: cors.CorsOptions = {
  origin: '*',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs)
};

export const config = {
  mongo: {
    url: MONGO_URL
  },
  server: {
    port: SERVER_PORT
  },
  helmet: {
    options: HELMET_OPTIONS
  },
  cors: {
    options: CORS_OPTIONS
  }
};
