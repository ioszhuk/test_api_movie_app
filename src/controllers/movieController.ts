import {Request, Response} from 'express';
import {validationResult} from 'express-validator';
import {Movie} from '../models/movie';

export class movieController {
  async index(req: Request, res: Response) {
    try {
      const models = await Movie.find();
      res.json(models);
    } catch (e: any) {
      res.status(400).json({message: 'Error happened in request'});
    }
  }

  async show(req: Request, res: Response) {
    try {
      const {id} = req.params;

      const model = await Movie.findById(id);

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

      const {key, name, description, img, genres, rate, length} = req.body;

      const model = await Movie.create({key, name, description, img, genres, rate, length});

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

      const {key, name, description, img, genres, rate, length} = req.body;

      const model = await Movie.findOneAndUpdate(
        {_id: id},
        {
          key,
          name,
          description,
          img,
          genres,
          rate,
          length
        },
        {new: true}
      );

      res.json(model);
    } catch (e: any) {
      res.status(400).json({message: 'Error happened in request'});
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const {id} = req.params;

      const response = await Movie.findOneAndDelete({_id: id});

      res.json(response);
    } catch (e: any) {
      res.status(400).json({message: 'Error happened in request'});
    }
  }
}
