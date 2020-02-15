import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Course } from '../model/Course';


@Injectable({
  providedIn: 'root'
})
export class HelpService {

  constructor(private http: HttpClient) {

  }

  // eslint-disable-next-line
  createCourse(name, course) {
    console.log('executed service')
    return this.http.post<Object>(`http://localhost:8080/instructors/${name}/courses/`, course);
  }

}
