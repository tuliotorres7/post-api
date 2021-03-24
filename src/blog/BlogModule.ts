import { Module } from '@nestjs/common';
import { PostController } from './PostController';
import { PostService } from './services/PostService';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'bloguser',
      password: 'admin',
      database: 'postapp',
      entities: [__dirname + '/**/*Entity{.ts,.js}'],
      synchronize: true,
    }),
  ],
  controllers: [
    PostController,
  ],
  providers: [
    PostService,
  ],
})
export class BlogModule{}
