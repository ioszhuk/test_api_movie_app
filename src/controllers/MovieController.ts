import {Request, Response} from 'express';
import {validationResult} from 'express-validator';
import {IMovie, Movie} from '../models/Movie';
import {transformCollection, transformModel} from '../responses/movieResponse';

class MovieController {
  async index(req: Request, res: Response) {
    try {
      const models = await Movie.find<IMovie>();

      res.json(transformCollection(models));
    } catch (e) {
      res.status(400).json({message: 'Error happened in request'});
    }
  }

  async search(req: Request, res: Response) {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        res.status(422).json({message: 'Validation error', errors: errors});
        return;
      }

      const name = `${req.query.name}`;

      const models = await Movie.find<IMovie>({name: new RegExp(name, 'i')});

      res.status(200).json(transformCollection(models));
    } catch (e) {
      res.status(400).json({message: 'Error happened in request'});
    }
  }

  async show(req: Request, res: Response) {
    try {
      const {slug} = req.params;

      const model = await Movie.findOne<IMovie>({key: slug});

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

      const {slug, name, description, img, genres, rate, length} = req.body;

      const model = await Movie.create<IMovie>({key: slug, name, description, img, genres, rate, length});

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

      const slug = req.params?.slug;

      const {name, description, img, genres, rate, length} = req.body;

      const model = await Movie.findOneAndUpdate<IMovie>(
        {key: slug},
        {
          key: slug,
          name,
          description,
          img,
          genres,
          rate,
          length
        },
        {new: true}
      );

      res.json(transformModel(model));
    } catch (e) {
      res.status(400).json({message: 'Error happened in request'});
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const slug = req.params?.slug;

      const model = await Movie.findOneAndDelete({key: slug});

      res.json(transformModel(model));
    } catch (e) {
      res.status(400).json({message: 'Error happened in request'});
    }
  }
}

export const movieController = new MovieController();
