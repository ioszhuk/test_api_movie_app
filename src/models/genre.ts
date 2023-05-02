import {Model, model, Schema} from 'mongoose';

const genreSchema = new Schema({
  name: {type: String, unique: true, required: true}
});

export const Genre: Model<any> = model('Genre', genreSchema);
