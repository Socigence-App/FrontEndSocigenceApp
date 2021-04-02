import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  hide = true;
  toppings = new FormControl();

  toppingList: string[] = ['Tarjeta de identidad', 'Cédula de ciudadanía', 'Cédula de extranjería', 'Pasaporte'];


  constructor() { }

  ngOnInit(): void {
  }

}
