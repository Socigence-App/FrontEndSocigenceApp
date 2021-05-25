import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { environment } from '../environment/env';
import { User } from '../models/user.model';
import { UserInfoService } from '../service/user-info.service';

@Component({
  selector: 'app-editar-usuarios',
  templateUrl: './editar-usuarios.component.html',
  styleUrls: ['./editar-usuarios.component.css']
})
export class EditarUsuariosComponent implements OnInit {
  hide = true;
  color: ThemePalette = 'accent';
  currentUser!: User;
  tipoUsuario!: string;
  tipos: string[]=['Administrador', 'Normal'];
  identificaciones: string[] =['Tarjeta de identidad', 'Cedula de Ciudadanía', 'Pasaporte'];

  constructor(private UserInfoService: UserInfoService) { 
    this.currentUser = environment.User;
  }

  ngOnInit(): void {
  }

  editarUsuario(){
    this.UserInfoService.updateUser(this.currentUser);
  }

}
