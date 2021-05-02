import { Component, OnInit } from '@angular/core';
import { Recompensa } from '../models/recompensa.model';
import { RecompensaServiceService } from '../service/recompensa-service.service';

@Component({
  selector: 'app-ver-recompensas',
  templateUrl: './ver-recompensas.component.html',
  styleUrls: ['./ver-recompensas.component.css']
})
export class VerRecompensasComponent implements OnInit {

  recompensas!: Array <Recompensa>;

  constructor(private RecompensaServiceService: RecompensaServiceService) { 
    this.recompensas = new Array <Recompensa>();
  }

  ngOnInit(): void {
    this.RecompensaServiceService.getAllRecompensas().subscribe((recompensa)=> {
      this.recompensas = recompensa;
      console.log(this.recompensas);
    })
  }

}
