import express, {Router} from 'express';
import {genreController} from '../controllers/genreController';
import {CREATE_GENRE, UPDATE_GENRE, genreValidator} from '../validators/genreValidator';

export const genreRouter: Router = express.Router();

const controller = new genreController();

genreRouter.get('/', controller.index);

genreRouter.get('/:id', controller.show);

genreRouter.post('/', genreValidator(CREATE_GENRE), controller.create);

genreRouter.put('/:id', genreValidator(UPDATE_GENRE), controller.update);

genreRouter.delete('/:id', controller.delete);
