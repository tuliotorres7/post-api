import {Controller, Get} from '@nestjs/common';
import { PostService } from './services/PostService';
import { Observable } from 'rxjs';
import { PostModel } from './models/PostModel';


@Controller('posts')
export class PostController {

    constructor(private postService: PostService){
    }

    @Get()
    findAll(): Observable<PostModel[]>{
        return this.postService.findAll();
    }
}
