import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from '../models/post.model';
import {environment} from '../environment/env';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InfoPublicacionesServiceService {

  apiDesplegada: string;

  constructor(private http: HttpClient) {
    this.apiDesplegada = "https://socigence-backend.herokuapp.com/";
   }

  
  createPost(newPost: Post){
    this.http.post(`${environment.apiUrl}post`,newPost).subscribe(post => console.log(post));
}

  crearPostAnalisis(newPost: Post){
    this.http.post(`${this.apiDesplegada}post`,newPost).subscribe(post => console.log(post));
  }

  getAllPosts():Observable<Post[]> {
    return this.http.get<Post[]>(`${environment.apiUrl}post/`);
}

  getPostsAnalisis():Observable<Post[]> {
  return this.http.get<Post[]>(`${this.apiDesplegada}post/`);
}

  updatePost(post: Post){
    this.http.put(`${environment.apiUrl}post/${post._id}`, post).subscribe(post => console.log(post));
    console.log("Publicacion actualizada")
}

updatePostAnalisis(post: Post){
  this.http.put(`${this.apiDesplegada}post/${post._id}`, post).subscribe(post => console.log(post));
    console.log("Solución actualizada")
}

deletePost(idPost: String){
  this.http.delete(`${environment.apiUrl}post/${idPost}`).subscribe((post=>{
    console.log("publicacion con id : " + idPost + " Eliminada")
  }))
}

eliminarPostAnalisis(idPost: String){
  this.http.delete(`${this.apiDesplegada}post/${idPost}`).subscribe((post=>{
    console.log("publicacion con id : " + idPost + " Eliminada")
  }))
}
}
