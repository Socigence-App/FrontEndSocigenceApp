import { Component, Input, OnInit } from '@angular/core';
import { environment } from '../environment/env';
import { User } from '../models/user.model';
import { UserInfoService } from '../service/user-info.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  @Input()

  usuario!: User;

  constructor(private UserInfoService: UserInfoService) { }

  ngOnInit(): void {
  }

  eliminarUsuario(){
    this.UserInfoService.deleteUser(this.usuario._id);
  }

  editar(usuario: User){
    environment.User= usuario;
  }

}
