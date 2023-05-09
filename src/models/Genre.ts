import {Model, model, Schema, Document} from 'mongoose';

export interface IGenre extends Document {
  name: string;
}

const genreSchema = new Schema<IGenre>({
  name: {type: String, unique: true, required: true}
});

export const Genre: Model<IGenre> = model('Genre', genreSchema);
