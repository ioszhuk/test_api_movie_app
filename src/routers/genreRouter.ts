import express, {Router} from 'express';
import {genreController} from '../controllers/genreController';
import {genreValidator, GenreValidateScenario} from '../validators/genreValidator';

export const genreRouter: Router = express.Router();

const controller = new genreController();

genreRouter.get('/', controller.index);

genreRouter.get('/:id', controller.show);

genreRouter.post('/', genreValidator(GenreValidateScenario.CREATE_GENRE), controller.create);

genreRouter.put('/:id', genreValidator(GenreValidateScenario.UPDATE_GENRE), controller.update);

genreRouter.delete('/:id', controller.delete);
