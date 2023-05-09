import express, {Router} from 'express';
import {genreValidator, GenreValidateScenario} from '../validators/genreValidator';
import {genreController} from '../controllers/GenreController';

export const genreRouter: Router = express.Router();

genreRouter.get('/', genreController.index);

genreRouter.get('/:id', genreController.show);

genreRouter.post('/', genreValidator(GenreValidateScenario.CREATE_GENRE), genreController.create);

genreRouter.put('/:id', genreValidator(GenreValidateScenario.UPDATE_GENRE), genreController.update);

genreRouter.delete('/:id', genreController.delete);
