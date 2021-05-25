import { Component, OnInit } from '@angular/core';
import { environment } from '../environment/env';
import { User } from '../models/user.model';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  currentUser!: User;

  constructor() {
    this.currentUser = environment.User;
   }

  ngOnInit(): void {
  }

}
