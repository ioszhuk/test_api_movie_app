import {body, ValidationChain} from 'express-validator';

export const CREATE_MOVIE = 'CreateMovie';
export const UPDATE_MOVIE = 'UpdateMovie';

export function movieValidator(methodName: string): ValidationChain[] | any {
  switch (methodName) {
    case CREATE_MOVIE:
      return [
        body('key').exists().isString().trim().escape(),
        body('name').exists().isString().trim().escape(),
        body('description').exists().isString().trim().escape(),
        body('img').exists().isString().trim().escape(),
        body('genres').exists(),
        body('rate').exists().isString().trim().escape(),
        body('length').exists().isString().trim().escape()
      ];
    case UPDATE_MOVIE:
      return [
        body('key').optional().isString().trim().escape(),
        body('name').optional().isString().trim().escape(),
        body('description').optional().isString().trim().escape(),
        body('img').optional().isString().trim().escape(),
        body('genres').optional(),
        body('rate').optional().isString().trim().escape(),
        body('length').optional().isString().trim().escape()
      ];
  }
}
