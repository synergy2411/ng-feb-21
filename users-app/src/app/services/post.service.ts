import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../model/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private baseUrl : string = "http://localhost:3000/posts";
  constructor(private httpClient : HttpClient) { }

  getPosts(): Observable<Array<Post>>{
    return this.httpClient.get<Array<Post>>(`${this.baseUrl}`)
  }

  createPost(post : Post){
    return this.httpClient.post(`${this.baseUrl}`,post)
  }

  deletePost(id : string){
    return this.httpClient.delete(`${this.baseUrl}/${id}`)
  }

  editPost(id : string, body : string){
    return this.httpClient.patch(`${this.baseUrl}/${id}`,{body})
  }

}
