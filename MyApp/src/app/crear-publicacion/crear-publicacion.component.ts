import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import { environment } from '../environment/env';
import { Categoria } from '../models/categoria.model';
import { Post } from '../models/post.model';
import { CategoriaServiceService } from '../service/categoria-service.service';
import { InfoPublicacionesServiceService } from '../service/info-publicaciones-service.service';

@Component({
  selector: 'app-crear-publicacion',
  templateUrl: './crear-publicacion.component.html',
  styleUrls: ['./crear-publicacion.component.css']
})
export class CrearPublicacionComponent implements OnInit {
  
  newPost: Post;
  
  selectedCategoria!: Categoria; 
  categorias: Categoria[];


  constructor(private CategoriaServiceService: CategoriaServiceService, private InfoPublicacionesServiceService:InfoPublicacionesServiceService) {
    this.newPost = new Post ();
    this.categorias = environment.Categorias;
   }

  ngOnInit(): void {
  this.CategoriaServiceService.getAllCategorias().subscribe((categoria)=> {
      environment.Categorias = categoria
  })
  this.categorias = environment.Categorias;
  
  }


  public crearPost(){
    this.newPost.user = environment.User._id;
    this.newPost.categoria = this.selectedCategoria._id;
    this.newPost.puntuacion = 0;
    this.InfoPublicacionesServiceService.createPost(this.newPost)
  }
}
