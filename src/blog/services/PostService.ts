import {Injectable} from '@nestjs/common';
import { Observable, from } from 'rxjs';
import {InjectRepository} from '@nestjs/typeorm';
import { PostEntity } from '../entities/PostEntity';
import { Repository } from 'typeorm';
import {CreatePostDto} from '../dtos/CreatePostDto';
import { PostDto } from '../dtos/PostDto';
import * as _ from 'lodash';
import { map } from 'rxjs/operators';
import { EditPostDto } from '../dtos/EditPostDto';

@Injectable()
export class PostService {
    constructor(@InjectRepository(PostEntity) private readonly postRepository: Repository<PostEntity>){

    }
    public findAll(): Observable<PostEntity[]>{
        return from(this.postRepository.find())
        .pipe(
            map( (posts) => _.orderBy(posts,['id'], ['desc'])),
        );
    }
    
    public create(createPostDto: CreatePostDto): Promise<PostDto>{
       return this.postRepository.save(createPostDto);
    }

    public edit(editPostDto: EditPostDto): Promise<PostDto>{
        return this.postRepository.save(editPostDto);
     }


    public delete(postId: number): void {
       this.postRepository.delete(postId);
     }

}