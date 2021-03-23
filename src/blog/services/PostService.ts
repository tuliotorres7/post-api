import {Injectable} from '@nestjs/common';
import {PostModel} from '../models/PostModel';
import { Observable, of } from 'rxjs';
import { MockedPosts } from '../mocks/MockedPost';

@Injectable()
export class PostService {
    public findAll(): Observable<PostModel[]>{
        return of(MockedPosts);
    }
}