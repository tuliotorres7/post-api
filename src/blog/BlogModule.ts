import { Module } from '@nestjs/common';
import { PostController } from './PostController';
import { PostService } from './services/PostService';

@Module({
  imports: [],
  controllers: [
    PostController,
  ],
  providers: [
    PostService,
  ],
})
export class BlogModule{}
