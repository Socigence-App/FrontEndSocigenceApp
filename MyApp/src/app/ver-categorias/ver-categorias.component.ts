import { Component, OnInit } from '@angular/core';
import { Categoria } from '../models/categoria.model';
import { CategoriaServiceService } from '../service/categoria-service.service';

@Component({
  selector: 'app-ver-categorias',
  templateUrl: './ver-categorias.component.html',
  styleUrls: ['./ver-categorias.component.css']
})
export class VerCategoriasComponent implements OnInit {

  categorias: Array<Categoria>;


  constructor(private CategoriaServiceService: CategoriaServiceService) { 
    this.categorias = new Array <Categoria>();
  }

  ngOnInit(): void {
    this.CategoriaServiceService.getAllCategorias().subscribe((categoria)=> {
      this.categorias = categoria;
      console.log(this.categorias);
    })
  }

}
