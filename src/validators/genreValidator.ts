import {body, ValidationChain} from 'express-validator';

export const CREATE_GENRE = 'CreateGenre';
export const UPDATE_GENRE = 'UpdateGenre';

export function genreValidator(methodName: string): ValidationChain[] | any {
  switch (methodName) {
    case CREATE_GENRE:
      return [body('name').exists().isString().trim().escape()];
    case UPDATE_GENRE:
      return [body('name').exists().isString().trim().escape()];
  }
}
