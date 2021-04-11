import { Component, OnInit } from '@angular/core';
import { Categoria } from '../models/categoria.model';
import { CategoriaServiceService } from '../service/categoria-service.service';

@Component({
  selector: 'app-crear-categoria',
  templateUrl: './crear-categoria.component.html',
  styleUrls: ['./crear-categoria.component.css']
})
export class CrearCategoriaComponent implements OnInit {

  nuevaCategoria: Categoria;


  constructor(private CategoriaServiceService: CategoriaServiceService) {
    this.nuevaCategoria = new Categoria();
   }

  ngOnInit(): void {
  }

  public crearCategoria(){
    this.CategoriaServiceService.createCategoria(this.nuevaCategoria);
  }
}
