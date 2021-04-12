import { Component, Input, OnInit } from '@angular/core';
import { Reto } from '../models/reto.model';
import { InfoRetosService } from '../service/info-retos.service';

@Component({
  selector: 'app-reto',
  templateUrl: './reto.component.html',
  styleUrls: ['./reto.component.css']
})
export class RetoComponent implements OnInit {

  @Input()

  reto!: Reto;

  constructor(private InfoRetosService: InfoRetosService) { }

  ngOnInit(): void {
  }


  eliminarReto(){
    this.InfoRetosService.deleteReto(this.reto._id);
  }
  
}
