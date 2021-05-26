import { Component, OnInit } from '@angular/core';
import { Categoria } from '../models/categoria.model';
import { CategoriaServiceService } from '../service/categoria-service.service';

@Component({
  selector: 'app-crear-ejercicios',
  templateUrl: './crear-ejercicios.component.html',
  styleUrls: ['./crear-ejercicios.component.css']
})
export class CrearEjerciciosComponent implements OnInit {

  nuevaCategoria: Categoria;


  constructor(private CategoriaServiceService: CategoriaServiceService) {
    this.nuevaCategoria = new Categoria();
   }

  ngOnInit(): void {
  }

  public crearEjercicio(){
    this.CategoriaServiceService.crearCategoriaAnalisis(this.nuevaCategoria);
  }
}


