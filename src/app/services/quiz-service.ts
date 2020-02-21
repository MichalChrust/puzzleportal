import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {HelpMessage} from '../models/HelpMessage';


@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private http: HttpClient) {

  }

  getQuiz(id: number) {
    console.log('executed service: getQuiz');
    // tslint:disable-next-line:ban-types
    return this.http.get<HelpMessage>(`http://localhost:8080/questions/getquiz/${id}`);
  }

  getQuizList() {
    return this.http.get<HelpMessage>(`http://localhost:8080/questions/getquiz/all`);
  }
}
