import express, {Router} from 'express';
import {movieController} from '../controllers/movieController';
import {MovieValidateScenario, movieValidator} from '../validators/movieValidator';

export const movieRouter: Router = express.Router();

const controller = new movieController();

movieRouter.get('/', controller.index);

movieRouter.get('/:slug', controller.show);

movieRouter.post('/', movieValidator(MovieValidateScenario.CREATE_MOVIE), controller.create);

movieRouter.put('/:slug', movieValidator(MovieValidateScenario.UPDATE_MOVIE), controller.update);

movieRouter.delete('/:slug', controller.delete);
