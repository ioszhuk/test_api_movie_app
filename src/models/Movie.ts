import {Model, model, Schema, Document} from 'mongoose';

export interface IMovie extends Document {
  key: string;
  name: string;
  description: string;
  img: string;
  genres: string[] | undefined;
  rate: number;
  length: string;
}

const movieSchema = new Schema<IMovie>({
  key: {type: String, required: true, minLength: 2, unique: true},
  name: {type: String, required: true, unique: true},
  description: {type: String, required: true},
  img: {type: String, required: true},
  genres: {type: Schema.Types.Array, ref: 'Genre'},
  rate: {type: Number, required: true},
  length: {type: String, required: true}
});

export const Movie: Model<IMovie> = model('Movie', movieSchema);
