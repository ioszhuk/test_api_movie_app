import {Model, model, Schema} from 'mongoose';

const movieSchema = new Schema({
  key: {type: String, required: true, minLength: 2, unique: true},
  name: {type: String, required: true, unique: true},
  description: {type: String},
  img: {type: String, required: true},
  genres: {type: Array, ref: 'Genre'},
  rate: {type: Number, required: true},
  length: {type: String, required: true}
});

export const Movie: Model<any> = model('Movie', movieSchema);
