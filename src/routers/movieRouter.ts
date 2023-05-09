import express, {Router} from 'express';
import {MovieValidateScenario, movieValidator} from '../validators/movieValidator';
import {movieController} from '../controllers/MovieController';

export const movieRouter: Router = express.Router();

movieRouter.get('/', movieController.index);

movieRouter.get('/search', movieValidator(MovieValidateScenario.SEARCH_MOVIE), movieController.search);

movieRouter.get('/:slug', movieController.show);

movieRouter.post('/', movieValidator(MovieValidateScenario.CREATE_MOVIE), movieController.create);

movieRouter.put('/:slug', movieValidator(MovieValidateScenario.UPDATE_MOVIE), movieController.update);

movieRouter.delete('/:slug', movieController.delete);
