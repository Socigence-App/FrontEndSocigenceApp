import { Component, OnInit } from '@angular/core';
import {CategoriaServiceService} from '../service/categoria-service.service'
import { environment } from '../environment/env';
import { User } from '../models/user.model';

@Component({
  selector: 'app-perfil-admi',
  templateUrl: './perfil-admi.component.html',
  styleUrls: ['./perfil-admi.component.css']
})
export class PerfilAdmiComponent implements OnInit {

  currentUser!: User;

  constructor(private CategoriaServiceService: CategoriaServiceService) { 
    this.currentUser = environment.User;
  }

  ngOnInit(): void { 
    this.CategoriaServiceService.getAllCategorias().subscribe((categoria)=> {
    environment.Categorias = categoria
    })
  }

}
