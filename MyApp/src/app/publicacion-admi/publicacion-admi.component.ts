import { Component, Input, OnInit } from '@angular/core';
import { environment } from '../environment/env';
import { Post } from '../models/post.model';


@Component({
  selector: 'app-publicacion-admi',
  templateUrl: './publicacion-admi.component.html',
  styleUrls: ['./publicacion-admi.component.css']
})
export class PublicacionAdmiComponent implements OnInit {

  @Input()

  post!:Post;

  constructor() {}


  ngOnInit(): void {

  }

  editar(post:Post){
    environment.Post = post;
  }

}
