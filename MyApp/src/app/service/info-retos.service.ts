import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Reto } from '../models/reto.model';
import {environment} from '../environment/env';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InfoRetosService {

  constructor(private http: HttpClient) { 
  
  }

  createReto(newReto: Reto){
    this.http.post(`${environment.apiUrl}reto`,newReto).subscribe(reto => console.log(reto))
}

  getAllRetos():Observable<Reto[]>{
    return this.http.get<Reto[]>(`${environment.apiUrl}reto/`);

  }

  deleteReto(idReto: String) {
    this.http.delete(`${environment.apiUrl}reto/${idReto}`).subscribe((reto=>{
      console.log("reto con id : " + idReto + " Eliminado")
    }))
  }

  updateReto(reto: Reto){
    this.http.put(`${environment.apiUrl}reto/${reto._id}`, reto).subscribe(reto => console.log(reto));
    console.log("Reto actualizado")
  }
}
