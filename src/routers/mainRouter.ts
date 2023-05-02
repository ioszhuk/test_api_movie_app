import express, {Router} from 'express';
import {Request, Response} from 'express';
import {movieRouter} from './movieRouter';
import {genreRouter} from './genreRouter';

export const mainRouter: Router = express.Router();

mainRouter.use('/movies', movieRouter);

mainRouter.use('/genres', genreRouter);

mainRouter.use('/', async (req: Request, res: Response) => {
  res.send('Application is running!');
});
