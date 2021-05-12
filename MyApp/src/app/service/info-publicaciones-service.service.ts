import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from '../models/post.model';
import {environment} from '../environment/env';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InfoPublicacionesServiceService {

  constructor(private http: HttpClient) { }

  
  createPost(newPost: Post){
    this.http.post(`${environment.apiUrl}post`,newPost).subscribe(post => console.log(post));
}

  getAllPosts():Observable<Post[]> {
  return this.http.get<Post[]>(`${environment.apiUrl}post/`);
}

updatePost(post: Post){
  this.http.put(`${environment.apiUrl}post/${post._id}`, post).subscribe(post => console.log(post));
  console.log("Publicacion actualizada")
}
}
