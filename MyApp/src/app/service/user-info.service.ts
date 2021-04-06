import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';

import {environment} from '../environment/env';
import { User } from "../models/user.model";
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root'
  })
 
export class UserInfoService{

    constructor(private http: HttpClient){

    }

    createUser(newUser: User){
        this.http.post(`${environment.apiUrl}user`,newUser).subscribe(user => console.log(user))
    }

    buscarUser (username: String) {
        return this.http.get<User>(`${environment.apiUrl}user/${username}`);
    }
  
    getAllUsers (): Observable<{data: User[]}> {
        return this.http.get <{data: User[]}>(`${environment.apiUrl}user`);
    }

}