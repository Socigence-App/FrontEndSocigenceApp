import { Component, Input, OnInit } from '@angular/core';
import { Categoria } from '../models/categoria.model';
import { CategoriaServiceService } from '../service/categoria-service.service';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {

  @Input()

  categoria!: Categoria;
  

  constructor(private CategoriaServiceService: CategoriaServiceService) {}

  ngOnInit(): void {
  }

  eliminarCategoria(){
    this.CategoriaServiceService.deleteCategoria(this.categoria._id);
  }

}
