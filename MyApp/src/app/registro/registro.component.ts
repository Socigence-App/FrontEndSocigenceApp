import { Component, OnInit } from '@angular/core';
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


  constructor(private UserInfoService: UserInfoService) { 
    this.nuevoUsuario= new User();
  }

  ngOnInit(): void {
  }

  public crearUsuario(){
    this.UserInfoService.createUser(this.nuevoUsuario);
  }

  

}
