import express, {Router} from 'express';
import {movieController} from '../controllers/movieController';
import {CREATE_MOVIE, UPDATE_MOVIE, movieValidator} from '../validators/movieValidator';

export const movieRouter: Router = express.Router();

const controller = new movieController();

movieRouter.get('/', controller.index);

movieRouter.get('/:slug', controller.show);

movieRouter.post('/', movieValidator(CREATE_MOVIE), controller.create);

movieRouter.put('/:slug', movieValidator(UPDATE_MOVIE), controller.update);

movieRouter.delete('/:slug', controller.delete);
