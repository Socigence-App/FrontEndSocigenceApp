import { Component, OnInit } from '@angular/core';
import { environment } from '../environment/env';
import { Categoria } from '../models/categoria.model';
import { Reto } from '../models/reto.model';
import { CategoriaServiceService } from '../service/categoria-service.service';
import { InfoRetosService } from '../service/info-retos.service';

@Component({
  selector: 'app-editar-reto',
  templateUrl: './editar-reto.component.html',
  styleUrls: ['./editar-reto.component.css']
})
export class EditarRetoComponent implements OnInit {

  currentReto!: Reto;
  selectedCategoria!: Categoria; 
  categorias: Categoria[];

  constructor(private InfoRetosService: InfoRetosService, private CategoriaServiceService: CategoriaServiceService) {
    this.currentReto = environment.Reto;
    this.categorias = environment.Categorias;
   }

   ngOnInit(): void {
    this.CategoriaServiceService.getAllCategorias().subscribe((categoria)=> {
      environment.Categorias = categoria
  })
  this.categorias = environment.Categorias;
  
  }

  editarReto(){
    this.InfoRetosService.updateReto(this.currentReto);
  }

}
