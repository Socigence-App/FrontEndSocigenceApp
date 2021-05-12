import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Recompensa } from '../models/recompensa.model'
import {environment} from '../environment/env';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RecompensaServiceService {

  constructor(private http: HttpClient) { }

  createRecompensa(newRecompensa: Recompensa){
    this.http.post(`${environment.apiUrl}recom`, newRecompensa).subscribe(recompensa => console.log(recompensa))
  }

  getAllRecompensas(): Observable<Recompensa[]>{
    return this.http.get<Recompensa[]>(`${environment.apiUrl}recom/`);
  }
}
