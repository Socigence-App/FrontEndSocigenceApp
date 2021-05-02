import { Component, OnInit } from '@angular/core';
import { Recompensa } from '../models/recompensa.model';
import { RecompensaServiceService } from '../service/recompensa-service.service';

@Component({
  selector: 'app-crear-recompensa',
  templateUrl: './crear-recompensa.component.html',
  styleUrls: ['./crear-recompensa.component.css']
})
export class CrearRecompensaComponent implements OnInit {

  nuevaRecompensa!: Recompensa;

  constructor(private RecompensaServiceService: RecompensaServiceService) { 
    this.nuevaRecompensa = new Recompensa();
  }

  ngOnInit(): void {
  }

  public crearRecompensa(){
    this.RecompensaServiceService.createRecompensa(this.nuevaRecompensa);
  }

}
