import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {User} from '../models/usermodels/User';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RankingService {

  constructor(private http: HttpClient) {

  }


  // eslint-disable-next-line
  getTopTen(): Observable<User[]> {
    console.log('executed service "ranking-service" with method getTopTen');
    // tslint:disable-next-line:ban-types
    return this.http.get<User[]>(`http://localhost:8081/user/ranked`);
  }
}
