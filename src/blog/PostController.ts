import {Body, Controller, Get ,Post } from '@nestjs/common';
import { PostService } from './services/PostService';
import { Observable } from 'rxjs';
import {PostEntity} from './entities/PostEntity';
import {CreatePostDto} from './dtos/CreatePostDto';

@Controller('posts')
export class PostController {

    constructor(private postService: PostService){
    }

    @Get()
    findAll(): Observable<PostEntity[]>{
        return this.postService.findAll();
    }

    @Post()
    create(@Body() createPostDto: CreatePostDto){
       return this.postService.create(createPostDto);
    }

}
