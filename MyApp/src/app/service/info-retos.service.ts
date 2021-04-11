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

}
