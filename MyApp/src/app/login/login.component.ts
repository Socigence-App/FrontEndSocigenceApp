import { Component, OnInit } from '@angular/core';
import { environment } from '../environment/env';
import { Usuario } from '../models/user.model';
import { UserInfoService } from '../service/user-info.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  usuario: Usuario;
  username!: string;
  contrasena!: string;

  constructor(){
    this.usuario=new Usuario();
  }
  

  hide = true;
  ngOnInit(): void {
  }

  

  

  

}
