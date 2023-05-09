import {body, query, ValidationChain} from 'express-validator';

export enum MovieValidateScenario {
  CREATE_MOVIE = 'CREATE_MOVIE',
  UPDATE_MOVIE = 'UPDATE_MOVIE',
  SEARCH_MOVIE = 'SEARCH_MOVIE'
}

export function movieValidator(methodName: string): ValidationChain[] | [] {
  switch (methodName) {
  case MovieValidateScenario.CREATE_MOVIE:
    return [
      body('key').trim().notEmpty(),
      body('name').trim().notEmpty(),
      body('description').trim().notEmpty(),
      body('img').trim().notEmpty(),
      body('genres').notEmpty(),
      body('rate').notEmpty().isNumeric(),
      body('length').trim().notEmpty()
    ];
  case MovieValidateScenario.UPDATE_MOVIE:
    return [
      body('key').optional().trim(),
      body('name').optional().trim(),
      body('description').optional().trim(),
      body('img').optional().trim(),
      body('genres').optional(),
      body('rate').optional().isNumeric(),
      body('length').optional().trim()
    ];
  case MovieValidateScenario.SEARCH_MOVIE:
    return [query('name').trim().notEmpty().toLowerCase()];
  default:
    return [];
  }
}
