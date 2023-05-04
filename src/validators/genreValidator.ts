import {body, ValidationChain} from 'express-validator';

export enum GenreValidateScenario {
  CREATE_GENRE = 'CREATE_GENRE',
  UPDATE_GENRE = 'UPDATE_GENRE'
}

export function genreValidator(methodName: string): ValidationChain[] | any {
  switch (methodName) {
    case GenreValidateScenario.CREATE_GENRE:
      return [body('name').exists().isString().trim().escape()];
    case GenreValidateScenario.UPDATE_GENRE:
      return [body('name').exists().isString().trim().escape()];
  }
}
