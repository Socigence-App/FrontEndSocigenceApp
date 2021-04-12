import { Component, OnInit } from '@angular/core';
import { Reto } from '../models/reto.model';
import { InfoRetosService } from '../service/info-retos.service';

@Component({
  selector: 'app-ver-retos',
  templateUrl: './ver-retos.component.html',
  styleUrls: ['./ver-retos.component.css']
})
export class VerRetosComponent implements OnInit {

  retos: Reto[];

  constructor(private InfoRetosService: InfoRetosService) { 
    this.retos = new Array <Reto>();
  }

  ngOnInit(): void {
    this.InfoRetosService.getAllRetos().subscribe((reto)=> {
      this.retos = reto;
      console.log(this.retos);
    })
  }

  


}
