import { Component, Input, OnInit } from '@angular/core';
import { environment } from '../environment/env';
import { Reto } from '../models/reto.model';
import { InfoRetosService } from '../service/info-retos.service';

@Component({
  selector: 'app-reto-admi',
  templateUrl: './reto-admi.component.html',
  styleUrls: ['./reto-admi.component.css']
})
export class RetoAdmiComponent implements OnInit {
  @Input()

  reto!: Reto;

  constructor(private InfoRetosService: InfoRetosService) { }

  ngOnInit(): void {
  }


  eliminarReto(){
    this.InfoRetosService.deleteReto(this.reto._id);
  }

  editar(reto: Reto){
    environment.Reto= reto;
  }
  
}


