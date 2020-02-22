import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {HelpMessage} from '../models/HelpMessage';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) { }

  public login(username: string, password: string) {
    console.log('executed service "login-service" with method login');
    const headers = new HttpHeaders({Authorization: 'Basic ' + btoa(username + ':' + password)});
    return this.http.post(`http://localhost:8081/account/login`, {headers});
  }

  public checkIfUserIsLogged() {
    console.log('executed service "login-service" with method checkIfUserIsLogged');
    return this.http.get(`http://localhost:8081/loggedUser`);
  }

  logout() {
    console.log('executed service "login-service" with method logout');
    // tslint:disable-next-line:ban-types
    return this.http.get(`http://localhost:8081/account/help`);
  }
}
