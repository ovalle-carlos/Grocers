import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Signin } from './user-signin.model';

@Injectable({
  providedIn: 'root'
})
export class UserSigninService {

  constructor(public http:HttpClient) { }

  checkUserInfo():Observable<Signin[]>{
    return this.http.get<Signin[]>("/assets/user-login.json");
  }

}