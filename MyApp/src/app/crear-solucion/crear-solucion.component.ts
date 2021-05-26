import { Component, OnInit } from '@angular/core';
import { environment } from '../environment/env';
import { Categoria } from '../models/categoria.model';
import { Post } from '../models/post.model';
import { CategoriaServiceService } from '../service/categoria-service.service';
import { InfoPublicacionesServiceService } from '../service/info-publicaciones-service.service';

@Component({
  selector: 'app-crear-solucion',
  templateUrl: './crear-solucion.component.html',
  styleUrls: ['./crear-solucion.component.css']
})
export class CrearSolucionComponent implements OnInit {

  newPost: Post;
  
  selectedCategoria!: Categoria; 
  categorias: Categoria[];


  constructor(private CategoriaServiceService: CategoriaServiceService, private InfoPublicacionesServiceService:InfoPublicacionesServiceService) {
    this.newPost = new Post ();
    this.categorias = environment.Categorias;
   }

  ngOnInit(): void {
  this.CategoriaServiceService.getCategoriasAnalisis().subscribe((categoria)=> {
      environment.Categorias = categoria
  })
  this.categorias = environment.Categorias;
  
  }

  crearPostAnalisis(){
    this.newPost.user = environment.User;
    this.newPost.categoria = this.selectedCategoria;
    this.InfoPublicacionesServiceService.crearPostAnalisis(this.newPost);
  }
}
