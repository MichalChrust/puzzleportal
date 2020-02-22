import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {HelpMessage} from '../models/HelpMessage';
import {User} from '../models/usermodels/User';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  credentials: Array<string>;
  user: User;

  constructor(private http: HttpClient) { }

  public login(username: string, password: string): Observable<User> {
    this.credentials = Array<string>();
    console.log('executed service "login-service" with method login');
    const headers = new HttpHeaders({Authorization: 'Basic ' + btoa(username + ':' + password)});
    return this.http.get<User>(`http://localhost:8081/user/login/secure`, {headers});
    // return this.getUserData(username);
  }

  getUserData(username: string): Observable<User> {
    console.log('executed service "login-service" with method getUserData');
    return this.http.get<User>(`http://localhost:8081/user/loggedUser`);
  }

  logout() {
    console.log('executed service "login-service" with method logout');
    // tslint:disable-next-line:ban-types
    return this.http.get(`http://localhost:8081/logout`);
  }
}
