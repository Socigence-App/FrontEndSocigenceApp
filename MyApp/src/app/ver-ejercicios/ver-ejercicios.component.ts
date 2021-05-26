import { Component, OnInit } from '@angular/core';
import { Categoria } from '../models/categoria.model';
import { CategoriaServiceService } from '../service/categoria-service.service';

@Component({
  selector: 'app-ver-ejercicios',
  templateUrl: './ver-ejercicios.component.html',
  styleUrls: ['./ver-ejercicios.component.css']
})
export class VerEjerciciosComponent implements OnInit {

  categorias: Array<Categoria>;


  constructor(private CategoriaServiceService: CategoriaServiceService) { 
    this.categorias = new Array <Categoria>();
  }

  ngOnInit(): void {
    this.CategoriaServiceService.getCategoriasAnalisis().subscribe((categoria)=> {
      this.categorias = categoria;
      console.log(this.categorias);
    })
  }

}
