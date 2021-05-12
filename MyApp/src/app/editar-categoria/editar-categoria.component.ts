import { Component, OnInit } from '@angular/core';
import { environment } from '../environment/env';
import { Categoria } from '../models/categoria.model';
import { CategoriaServiceService } from '../service/categoria-service.service';

@Component({
  selector: 'app-editar-categoria',
  templateUrl: './editar-categoria.component.html',
  styleUrls: ['./editar-categoria.component.css']
})
export class EditarCategoriaComponent implements OnInit {

  currentCategoria!: Categoria;


  constructor(private CategoriaServiceService: CategoriaServiceService) {
    this.currentCategoria = environment.Categoria;
   }

  ngOnInit(): void {
  }

  editarCategoria(){
    this.CategoriaServiceService.updateCategoria(this.currentCategoria);
  }

}
