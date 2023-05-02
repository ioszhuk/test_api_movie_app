import {Request, Response} from 'express';
import {validationResult} from 'express-validator';
import {Genre} from '../models/genre';
import {transformCollection, transformModel} from '../responses/genreResponse';

export class genreController {
  async index(req: Request, res: Response) {
    try {
      const models = await Genre.find();

      if (models) {
        return res.json(transformCollection(models));
      }

      res.json(models);
    } catch (e: any) {
      console.log(e.message);
      res.status(400).json({message: 'Error happened in request'});
    }
  }

  async show(req: Request, res: Response) {
    try {
      const {id} = req.params;

      const model = await Genre.findById(id);

      if (model) {
        return res.json(transformModel(model));
      }

      return res.json(model);
    } catch (e: any) {
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

      const model = await Genre.create({name});

      res.status(201).json(transformModel(model));
    } catch (e: any) {
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

      const model = await Genre.findOneAndUpdate({_id: id}, {name}, {new: true});

      res.json(transformModel(model));
    } catch (e: any) {
      res.status(400).json({message: 'Error happened in request'});
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const {id} = req.params;

      const model = await Genre.findOneAndDelete({_id: id});

      res.json(transformModel(model));
    } catch (e: any) {
      res.status(400).json({message: 'Error happened in request'});
    }
  }
}
