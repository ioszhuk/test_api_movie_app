import {Request, Response} from 'express';
import {validationResult} from 'express-validator';
import {Genre, IGenre} from '../models/Genre';
import {transformCollection, transformModel} from '../responses/genreResponse';

class GenreController {
  async index(req: Request, res: Response) {
    try {
      const models = await Genre.find<IGenre>();

      res.json(transformCollection(models));
    } catch (e) {
      res.status(400).json({message: 'Error happened in request'});
    }
  }

  async show(req: Request, res: Response) {
    try {
      const {id} = req.params;

      const model = await Genre.findById<IGenre>(id);

      res.json(transformModel(model));
    } catch (e) {
      res.status(400).json({message: 'Error happened in request'});
    }
  }

  async create(req: Request, res: Response) {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        res.status(422).json({message: 'Validation error', errors: errors});
        return;
      }

      const {name} = req.body;

      const model = await Genre.create<IGenre>({name});

      res.status(201).json(transformModel(model));
    } catch (e) {
      res.status(400).json({message: 'Error happened in request'});
    }
  }

  async update(req: Request, res: Response) {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        res.status(422).json({message: 'Validation error', errors: errors});
        return;
      }

      const {id} = req.params;

      const {name} = req.body;

      const model = await Genre.findOneAndUpdate<IGenre>({_id: id}, {name}, {new: true});

      res.json(transformModel(model));
    } catch (e) {
      res.status(400).json({message: 'Error happened in request'});
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const {id} = req.params;

      const model = await Genre.findOneAndDelete<IGenre>({_id: id});

      res.json(transformModel(model));
    } catch (e) {
      res.status(400).json({message: 'Error happened in request'});
    }
  }
}

export const genreController = new GenreController();
