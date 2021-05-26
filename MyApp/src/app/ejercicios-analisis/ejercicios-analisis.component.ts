import { Component, OnInit, Input } from '@angular/core';
import { environment } from '../environment/env';
import { Categoria } from '../models/categoria.model';
import { CategoriaServiceService } from '../service/categoria-service.service';

@Component({
  selector: 'app-ejercicios-analisis',
  templateUrl: './ejercicios-analisis.component.html',
  styleUrls: ['./ejercicios-analisis.component.css']
})
export class EjerciciosAnalisisComponent implements OnInit {
  @Input()

  categoria!: Categoria;
  
  constructor(private CategoriaServiceService: CategoriaServiceService) {}

  ngOnInit(): void {
  }

  eliminarCategoria(){
    this.CategoriaServiceService.deleteEjercicioAnalisis(this.categoria._id);
  }

  editar(categoria: Categoria){
    environment.Categoria= categoria;
  }


}
