import { Schema } from 'mongoose';

/**
 * Schema by Subscriptions
 */
export const MovieSchema = new Schema({
  name_movie: {
    type: 'string',
    required: true,
  },
  image_movie: {
    type: 'string',
    required: true,
  },
  description_movie: {
    type: 'string',
    required: true,
  },
  video_movie: {
    type: 'string',
    required: true,
  },
});
