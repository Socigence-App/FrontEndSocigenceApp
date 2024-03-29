import { Component, Input, OnInit } from '@angular/core';
import { environment } from '../environment/env';
import { Post } from '../models/post.model';
import { InfoPublicacionesServiceService } from '../service/info-publicaciones-service.service';


@Component({
  selector: 'app-publicacion-admi',
  templateUrl: './publicacion-admi.component.html',
  styleUrls: ['./publicacion-admi.component.css']
})
export class PublicacionAdmiComponent implements OnInit {

  @Input()

  post!:Post;

  constructor(private InfoPublicacionesService: InfoPublicacionesServiceService) {}


  ngOnInit(): void {

  }

  editar(post:Post){
    environment.Post = post;
  }

  eliminarPost(){
    this.InfoPublicacionesService.deletePost(this.post._id);
  }

}
