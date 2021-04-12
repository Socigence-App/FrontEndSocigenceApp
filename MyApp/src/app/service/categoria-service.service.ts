import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Categoria } from '../models/categoria.model';
import {environment} from '../environment/env';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriaServiceService {

  constructor(private http: HttpClient) {

   }

   createCategoria(newCategoria: Categoria){
    this.http.post(`${environment.apiUrl}categoria`,newCategoria).subscribe(categoria => console.log(categoria))
}
   getAllCategorias(): Observable<Categoria[]>{
    return this.http.get<Categoria[]>(`${environment.apiUrl}categoria/`);
  }

  buscarCategoria (_id: String):Observable<Categoria[]> {
    return this.http.get<Categoria[]>(`${environment.apiUrl}categoria/${_id}`);
  }
  
  deleteCategoria(idCategoria: String){
    this.http.delete(`${environment.apiUrl}categoria/${idCategoria}`).subscribe((categoria)=>{
      console.log("Categoria con id: " + idCategoria + " Eliminado")
    })

  }
}
