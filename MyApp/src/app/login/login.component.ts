import { JsonpClientBackend } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from '../environment/env';
import { User } from '../models/user.model';
import { UserInfoService } from '../service/user-info.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  nuevoUsuario: User;
  username: String;
  contrasena: String;
  currentUser: User;
  link: string;

  constructor(private userInfoService: UserInfoService){
    this.nuevoUsuario=new User();
    this.contrasena = new String;
    this.username = new String;
    this.currentUser = new User(); 
    this.link = '/login';
  }

  public async loguear () {
    let usuario = await this.userInfoService.buscarUser(this.username).subscribe(
      async (user) => {
        if (user[0].contrasena == null) {
          console.log("Usuario no registrado");
        }
        else if(user[0].contrasena == this.contrasena) {
          environment.User = user[0]; 
          console.log("Ingreso con exito");
          
          if (user[0].usertipo == 'Administrador') {
            console.log("Es admin");
            this.link = "/perfilAdmi";
            console.log("entro a la vista");
          } else {
            this.link = "/perfil";
          }
        } 
        else {
          console.log("Contraseña Incorrecta");
        }
        

      }
    );
  }



  
  

  hide = true;
  ngOnInit(): void {
  }

  

  

  

}
