import { Component, OnInit, Input } from '@angular/core';
import { environment } from '../environment/env';
import { Post } from '../models/post.model';
import { InfoPublicacionesServiceService } from '../service/info-publicaciones-service.service';

@Component({
  selector: 'app-solucion',
  templateUrl: './solucion.component.html',
  styleUrls: ['./solucion.component.css']
})
export class SolucionComponent implements OnInit {

  @Input()

  post!:Post;

  constructor(private InfoPublicacionesService: InfoPublicacionesServiceService) {}


  ngOnInit(): void {

  }

  editar(post:Post){
    environment.Post = post;
  }

  eliminarPost(){
    this.InfoPublicacionesService.eliminarPostAnalisis(this.post._id);
  }


}
