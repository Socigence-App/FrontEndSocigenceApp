import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Categoria } from '../models/categoria.model';
import {environment} from '../environment/env';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriaServiceService {

  apiDesplegada: string;

  constructor(private http: HttpClient) {
    this.apiDesplegada = "https://socigence-backend.herokuapp.com/";
   }

   createCategoria(newCategoria: Categoria){
    this.http.post(`${environment.apiUrl}categoria`,newCategoria).subscribe(categoria => console.log(categoria))
}

  crearCategoriaAnalisis(newCategoriaAnalisis: Categoria){
    this.http.post(`${this.apiDesplegada}categoria`,newCategoriaAnalisis).subscribe(categoria => console.log(categoria))
  }
   getAllCategorias(): Observable<Categoria[]>{
    return this.http.get<Categoria[]>(`${environment.apiUrl}categoria/`);
  }

  getCategoriasAnalisis(): Observable<Categoria[]>{
    return this.http.get<Categoria[]>(`${this.apiDesplegada}categoria/`);
  }

  buscarCategoria (_id: String):Observable<Categoria[]> {
    return this.http.get<Categoria[]>(`${environment.apiUrl}categoria/${_id}`);
  }
  
  deleteCategoria(idCategoria: String){
    this.http.delete(`${environment.apiUrl}categoria/${idCategoria}`).subscribe((categoria)=>{
      console.log("Categoria con id: " + idCategoria + " Eliminado")
    })

  }

  deleteEjercicioAnalisis(idCategoria: String){
    this.http.delete(`${this.apiDesplegada}categoria/${idCategoria}`).subscribe((categoria)=>{
      console.log("Categoria con id: " + idCategoria + " Eliminado")
    })

  }

  updateCategoria(categoria: Categoria){
    this.http.put(`${environment.apiUrl}categoria/${categoria._id}`, categoria).subscribe(categoria => console.log(categoria));
    console.log("Categoria actualizada");
  }

  updateEjercicioAnalisis(categoria: Categoria){
    this.http.put(`${this.apiDesplegada}categoria/${categoria._id}`, categoria).subscribe(categoria => console.log(categoria));
    console.log("Categoria actualizada");
  }
}
