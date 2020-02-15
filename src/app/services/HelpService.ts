import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class HelpService {

  constructor(private http: HttpClient) {

  }

  // eslint-disable-next-line
  createCourse(message) {
    console.log('executed service')
    return this.http.post<Object>(`http://localhost:8080/help`, message);
  }

}
