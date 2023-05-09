import {config} from './src/config';
import helmet from 'helmet';
import cors from 'cors';
import mongoose from 'mongoose';
import express, {Express} from 'express';
import {mainRouter} from './src/routers/mainRouter';
import {Logger} from './src/utils/Logger';

const app: Express = express();

app.use(helmet(config.helmet.options));
app.use(cors(config.cors.options));
app.use(express.json());
app.use(express.static('public'));

app.use(mainRouter);

function startServer() {
  app.listen(config.server.port, (): void => {
    // eslint-disable-next-line no-console
    console.log('App run on port:', config.server.port);
  });
}

(function connectDB() {
  mongoose
    .connect(config.mongo.url, {retryWrites: true, writeConcern: {w: 'majority'}})
    .then(() => {
      Logger.info('Connected to mongoDB');
      startServer();
    })
    .catch((error) => {
      Logger.error('Unable to connect mongoDB:');
      Logger.error(error);
    });
})();
