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

  constructor(private userInfoService: UserInfoService){
    this.nuevoUsuario=new User();
    this.contrasena = new String;
    this.username = new String;
    this.currentUser = new User(); 
  }

  public loguear () {

    let usuario = this.userInfoService.buscarUser(this.username).subscribe(
      async (user) => {
        this.currentUser = await user;
        console.log(this.currentUser);
        console.log(user);

      }
    )
    
    if (this.currentUser == null) {
      console.log("Usuario no registrado");
      console.log(this.currentUser)
    }
    else if(this.currentUser.contrasena == this.contrasena) {
      environment.User = this.currentUser;  
      console.log(this.currentUser)  
    } 
    else {
      console.log("Contraseña Incorrecta");
    }
  }



  
  

  hide = true;
  ngOnInit(): void {
  }

  

  

  

}
