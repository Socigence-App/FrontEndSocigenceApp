import { Component, OnInit } from '@angular/core';
import { environment } from '../environment/env';
import { Categoria } from '../models/categoria.model';
import { CategoriaServiceService } from '../service/categoria-service.service';

@Component({
  selector: 'app-editar-ejercicio',
  templateUrl: './editar-ejercicio.component.html',
  styleUrls: ['./editar-ejercicio.component.css']
})
export class EditarEjercicioComponent implements OnInit {

  currentCategoria!: Categoria;


  constructor(private CategoriaServiceService: CategoriaServiceService) {
    this.currentCategoria = environment.Categoria;
   }

  ngOnInit(): void {
  }

  editarEjercicio(){
    this.CategoriaServiceService.updateEjercicioAnalisis(this.currentCategoria);
  }

}
