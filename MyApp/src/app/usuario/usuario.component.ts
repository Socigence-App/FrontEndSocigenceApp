import { Component, Input, OnInit } from '@angular/core';
import { User } from '../models/user.model';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  @Input()

  usuario!: User;

  constructor() { }

  ngOnInit(): void {
  }

}
