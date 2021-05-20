import { Component, OnInit } from '@angular/core';
import { Reto } from '../models/reto.model';
import { InfoRetosService } from '../service/info-retos.service';

@Component({
  selector: 'app-ver-retos-admi',
  templateUrl: './ver-retos-admi.component.html',
  styleUrls: ['./ver-retos-admi.component.css']
})
export class VerRetosAdmiComponent implements OnInit {

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
