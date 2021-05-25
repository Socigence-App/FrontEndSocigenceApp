import { Component, OnInit, Input } from '@angular/core';
import { Recompensa } from '../models/recompensa.model';
import { RecompensaServiceService } from '../service/recompensa-service.service';

@Component({
  selector: 'app-recompensa-admi',
  templateUrl: './recompensa-admi.component.html',
  styleUrls: ['./recompensa-admi.component.css']
})
export class RecompensaAdmiComponent implements OnInit {

  @Input()

  recompensa!: Recompensa;

  constructor(private RecompensaServiceService: RecompensaServiceService) { }

  ngOnInit(): void {
  }

}
