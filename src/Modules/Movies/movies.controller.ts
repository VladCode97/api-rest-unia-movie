import { Controller, UseGuards, Inject, Get, Res } from '@nestjs/common';
import { JwtGuard } from '../../Common/Guards/jwt.guard';
import { MoviesService } from './movies.service';
import { Response } from 'express';
import { ApiResponse } from '@nestjs/swagger';

@Controller('Movies')
@UseGuards(JwtGuard)
export class MoviesController {
  @Inject()
  private moviesService: MoviesService;

  @Get('Movies')
  @ApiResponse({
    status: 201,
    description: 'Get movies',
  })
  @ApiResponse({ status: 403, description: 'Forbaiden' })
  async viewAllMovies(@Res() response: Response) {
    return response.json(await this.moviesService.viewAllMovies());
  }
}
