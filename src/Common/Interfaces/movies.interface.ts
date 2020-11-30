import { Document } from 'mongoose';


export default interface IMovies extends Document {
  name_user: string;
  image_movie: string;
  description_movie: number;
  video_movie: number;
}