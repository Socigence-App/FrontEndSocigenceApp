import { Component, Input, OnInit } from '@angular/core';
import { Recompensa } from '../models/recompensa.model';
import { RecompensaServiceService } from '../service/recompensa-service.service';


@Component({
  selector: 'app-recompensa',
  templateUrl: './recompensa.component.html',
  styleUrls: ['./recompensa.component.css']
})
export class RecompensaComponent implements OnInit {
  
  @Input()

  recompensa!: Recompensa;

  constructor(private RecompensaServiceService: RecompensaServiceService) { }

  ngOnInit(): void {
  }

}
