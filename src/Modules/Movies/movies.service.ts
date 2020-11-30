import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import IMovies from 'src/Common/Interfaces/movies.interface';
import { MovieDTO } from '../../Common/DTO/movie.dto';

@Injectable()
export class MoviesService {
  @InjectModel('MOVIES_MODEL')
  private moviesRepository: Model<IMovies>;

  /**
   * @method
   */
  async viewAllMovies(): Promise<
    Array<MovieDTO> | string | HttpException | any
  > {
    try {
      const movies = await this.moviesRepository.find({});
      return movies.length !== 0 ? movies : 'No found movies';
    } catch (e) {
      return new HttpException(e, HttpStatus.FORBIDDEN);
    }
  }
}
