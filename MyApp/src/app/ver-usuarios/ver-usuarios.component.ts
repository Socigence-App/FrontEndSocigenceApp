import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { UserInfoService } from '../service/user-info.service';

@Component({
  selector: 'app-ver-usuarios',
  templateUrl: './ver-usuarios.component.html',
  styleUrls: ['./ver-usuarios.component.css']
})
export class VerUsuariosComponent implements OnInit {

  usuarios: Array<User>;

  constructor(private UserInfoService: UserInfoService) {
    this.usuarios = new Array <User>();
   }

  ngOnInit(): void {
    this.UserInfoService.getAllUsers().subscribe((usuario)=>{
      this.usuarios = usuario;
      console.log(this.usuarios);
    })
  }
}
