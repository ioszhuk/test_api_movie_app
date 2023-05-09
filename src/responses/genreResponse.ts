import {IGenre} from '../models/Genre';

export const transformCollection = (models: IGenre[]) => {
  if (!models) {
    return null;
  }

  return models.map((model: IGenre) => transformModel(model));
};

export const transformModel = (model: IGenre) => {
  if (!model) {
    return null;
  }

  return {
    id: model._id,
    name: model.name
  };
};
