import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {RankingUser} from '../models/RankingUser';


@Injectable({
  providedIn: 'root'
})
export class RankingService {

  constructor(private http: HttpClient) {

  }


  // eslint-disable-next-line
  getTopTen() {
    console.log('executed service "ranking-service" with method getTopTen');
    // tslint:disable-next-line:ban-types
    return this.http.get<RankingUser>(`http://localhost:8081/ranking`);
  }
}
