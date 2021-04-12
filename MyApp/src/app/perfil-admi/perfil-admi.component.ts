import { Component, OnInit } from '@angular/core';
import {CategoriaServiceService} from '../service/categoria-service.service'
import { environment } from '../environment/env';

@Component({
  selector: 'app-perfil-admi',
  templateUrl: './perfil-admi.component.html',
  styleUrls: ['./perfil-admi.component.css']
})
export class PerfilAdmiComponent implements OnInit {

  constructor(private CategoriaServiceService: CategoriaServiceService) { }

  ngOnInit(): void { 
    this.CategoriaServiceService.getAllCategorias().subscribe((categoria)=> {
    environment.Categorias = categoria
    })
  }

}
