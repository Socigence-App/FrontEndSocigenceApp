import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { TipoDoc } from '../models/tipoDoc.model';
import { User } from '../models/user.model';
import { UserInfoService } from '../service/user-info.service';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  hide = true;
  nuevoUsuario: User;
  tipoUsuario!: string;
  tipos: string[]=['Administrador', 'Normal'];
  color: ThemePalette = 'accent';
  tipoDoc:TipoDoc[];


  constructor(private UserInfoService: UserInfoService) { 
    this.nuevoUsuario= new User();
    this.tipoDoc =[{nombre:'Tarjeta de identidad'}, {nombre:'Cédula de ciudadanía'}, {nombre:'Pasaporte'}]
  }

  ngOnInit(): void {
  }

  public crearUsuario(){
    this.UserInfoService.createUser(this.nuevoUsuario);
  }

  

}
