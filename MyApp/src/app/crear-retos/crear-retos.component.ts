import { Component, OnInit } from '@angular/core';
import { Reto } from '../models/reto.model';
import {InfoRetosService} from '../service/info-retos.service';
import {CategoriaServiceService} from '../service/categoria-service.service'
import { environment } from '../environment/env';
import { Categoria } from '../models/categoria.model';

@Component({
  selector: 'app-crear-retos',
  templateUrl: './crear-retos.component.html',
  styleUrls: ['./crear-retos.component.css']
})
export class CrearRetosComponent implements OnInit {

  newReto: Reto;

  selectedCategoria!: Categoria; 
  categorias: Categoria[];


  constructor(private InfoRetosService: InfoRetosService, private CategoriaServiceService: CategoriaServiceService) {
    this.newReto = new Reto ();
    this.categorias = environment.Categorias;
   }

  ngOnInit(): void {
    this.CategoriaServiceService.getAllCategorias().subscribe((categoria)=> {
      environment.Categorias = categoria
  })
  this.categorias = environment.Categorias;
  }

  crearReto() {
    this.newReto.categoria = this.selectedCategoria;
    this.InfoRetosService.createReto(this.newReto)
  }
}
