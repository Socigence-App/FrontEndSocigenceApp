import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';

import {environment} from '../environment/env';
import { User } from "../models/user.model";
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root'
  })
 
export class UserInfoService{

    apiDesplegada: string;

    constructor(private http: HttpClient){
        this.apiDesplegada = "https://socigence-backend.herokuapp.com/";
    }

    createUser(newUser: User){
        this.http.post(`${environment.apiUrl}user`,newUser).subscribe(user => console.log(user));
        this.http.post(`${this.apiDesplegada}user`, newUser).subscribe(user => console.log(user));
    }



    buscarUser (username: String):Observable<User[]> {
        return this.http.get<User[]>(`${environment.apiUrl}user/${username}`);
    }

    buscarUserAnalisis(username: String):Observable<User[]>{
        return this.http.get<User[]>(`${this.apiDesplegada}user/${username}`);
    }
  
    getAllUsers (): Observable<User[]> {
        return this.http.get <User[]>(`${environment.apiUrl}user`);
    }

    deleteUser(idUser: String){
        this.http.delete(`${environment.apiUrl}user/${idUser}`).subscribe((user=> {
            console.log("Usuario con id: "+ idUser + " Eliminado")
        }))

    }

    updateUser(user: User){
        this.http.put(`${environment.apiUrl}user/${user._id}`, user).subscribe(user => console.log(user));
    }


}