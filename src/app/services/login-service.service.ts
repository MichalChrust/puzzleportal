import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private http: HttpClient) { }

  public login(username:string,password:string){
    const headers=new HttpHeaders({Authorization: 'Basic ' +btoa(username+":"+password)})
    return this.http.post("http://localhost:8081/user",{headers});
  }
}
