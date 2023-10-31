import {
  Controller,
  Get,
  Param,
  Delete,
  Post,
  Patch,
  Body,
  Query,
} from '@nestjs/common';
import { MoviesService } from './movies.service';
import { Movie } from './entities/movie.entity';

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Get()
  getAll(): Movie[] {
    return this.moviesService.getAll();
  }

  @Get('search')
  search(@Query(`year`) searchYear: string) {
    return `찾습니다 ${searchYear}`;
  }
  // Get search가 다른 Get id 보다아래에 있으면 아래에있는 search가 id로 반환 주의

  @Get('/:id')
  getOne(@Param('id') movieId: string) {
    return this.moviesService.getOne(movieId);
  }
  @Post()
  create(@Body() movieData) {
    return this.moviesService.create(movieData);
  }
  @Delete('/:id')
  remove(@Param('id') movieId: string) {
    return this.moviesService.deleteOne(movieId);
  }

  @Patch('/:id')
  path(@Param('id') movieId: string, @Body() updateData) {
    return this.moviesService.update(movieId, updateData);
  }
}
