import { Component, Input, OnInit } from '@angular/core';
import { Reto } from '../models/reto.model';

@Component({
  selector: 'app-reto',
  templateUrl: './reto.component.html',
  styleUrls: ['./reto.component.css']
})
export class RetoComponent implements OnInit {

  @Input()

  reto!: Reto;

  constructor() { }

  ngOnInit(): void {
  }
  
}
