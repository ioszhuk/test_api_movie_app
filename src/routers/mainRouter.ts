import express, {Router} from 'express';

import {movieRouter} from './movieRouter';
import {genreRouter} from './genreRouter';

export const mainRouter: Router = express.Router();

mainRouter.use('/movies', movieRouter);

mainRouter.use('/genres', genreRouter);
