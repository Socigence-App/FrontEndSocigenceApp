import { Component, OnInit } from '@angular/core';
import { environment } from '../environment/env';
import { User } from '../models/user.model';
import { CategoriaServiceService } from '../service/categoria-service.service';
import { UserInfoService } from '../service/user-info.service';

@Component({
  selector: 'app-perfil-analisis',
  templateUrl: './perfil-analisis.component.html',
  styleUrls: ['./perfil-analisis.component.css']
})
export class PerfilAnalisisComponent implements OnInit {

  currentUser!: User;

  constructor(private UserInfoService: UserInfoService, private CategoriaServiceService: CategoriaServiceService) {
    this.currentUser = environment.User;
   }

  ngOnInit(): void {
    this.CategoriaServiceService.getCategoriasAnalisis().subscribe((categoria)=> {
      environment.Categorias = categoria
  })
  }

}
