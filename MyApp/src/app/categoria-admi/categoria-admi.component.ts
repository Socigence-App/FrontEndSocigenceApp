import { Component, Input, OnInit } from '@angular/core';
import { Categoria } from '../models/categoria.model';
import { CategoriaServiceService } from '../service/categoria-service.service';
import { environment } from '../environment/env';

@Component({
  selector: 'app-categoria-admi',
  templateUrl: './categoria-admi.component.html',
  styleUrls: ['./categoria-admi.component.css']
})
export class CategoriaAdmiComponent implements OnInit {

  @Input()

  categoria!: Categoria;
  

  constructor(private CategoriaServiceService: CategoriaServiceService) {}

  ngOnInit(): void {
  }

  eliminarCategoria(){
    this.CategoriaServiceService.deleteCategoria(this.categoria._id);
  }

  editar(categoria: Categoria){
    environment.Categoria= categoria;
  }

}
