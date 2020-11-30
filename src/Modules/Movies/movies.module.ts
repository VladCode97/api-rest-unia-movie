import { Module } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { MoviesController } from './movies.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { MovieSchema } from '../Database/Models/movies.model';

@Module({
  imports: [MongooseModule.forFeature([{name: 'MOVIES_MODEL', schema: MovieSchema}])],
  providers: [MoviesService],
  controllers: [MoviesController]
})
export class MoviesModule {}
