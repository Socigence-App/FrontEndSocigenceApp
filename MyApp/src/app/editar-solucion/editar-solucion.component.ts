import { Component, OnInit } from '@angular/core';
import { environment } from '../environment/env';
import { Categoria } from '../models/categoria.model';
import { Post } from '../models/post.model';
import { CategoriaServiceService } from '../service/categoria-service.service';
import { InfoPublicacionesServiceService } from '../service/info-publicaciones-service.service';

@Component({
  selector: 'app-editar-solucion',
  templateUrl: './editar-solucion.component.html',
  styleUrls: ['./editar-solucion.component.css']
})
export class EditarSolucionComponent implements OnInit {

  currentPost!: Post;
  selectedCategoria!: Categoria; 
  categorias: Categoria[];

  constructor(private InfoPublicacionesService: InfoPublicacionesServiceService, private CategoriaServiceService: CategoriaServiceService) {
    this.currentPost = environment.Post
    this.categorias = environment.Categorias;
   }

  ngOnInit(): void {
    this.CategoriaServiceService.getCategoriasAnalisis().subscribe((categoria)=> {
      environment.Categorias = categoria
  })
  this.categorias = environment.Categorias;
  }

  editarSolucion(){
    this.currentPost._id = this.currentPost._id;
    console.log(this.currentPost._id);
    this.InfoPublicacionesService.updatePostAnalisis(this.currentPost);
    console.log(this.currentPost);
  }

}
