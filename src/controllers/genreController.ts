import {Request, Response} from 'express';
import {validationResult} from 'express-validator';
import {Genre} from '../models/genre';

export class genreController {
  async index(req: Request, res: Response) {
    try {
      const models = await Genre.find();
      res.json(models);
    } catch (e: any) {
      res.status(400).json({message: 'Error happened in request'});
    }
  }

  async show(req: Request, res: Response) {
    try {
      const {id} = req.params;

      const model = await Genre.findById(id);

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

      res.status(201).json(model);
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

      res.json(model);
    } catch (e: any) {
      res.status(400).json({message: 'Error happened in request'});
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const {id} = req.params;

      const response = await Genre.findOneAndDelete({_id: id});

      res.json(response);
    } catch (e: any) {
      res.status(400).json({message: 'Error happened in request'});
    }
  }
}
