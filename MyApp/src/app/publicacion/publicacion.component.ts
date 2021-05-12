import { Component, Input, OnInit } from '@angular/core';
import { environment } from '../environment/env';
import { Post } from '../models/post.model';


@Component({
  selector: 'app-publicacion',
  templateUrl: './publicacion.component.html',
  styleUrls: ['./publicacion.component.css']
})
export class PublicacionComponent implements OnInit {
  
  @Input()

  post!:Post;

  constructor() {}


  ngOnInit(): void {

  }

  editar(post:Post){
    environment.Post = post;
  }

  

}
