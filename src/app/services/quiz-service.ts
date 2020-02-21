import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {HelpMessage} from '../models/HelpMessage';
import {Quiz} from '../models/Quiz';


@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private http: HttpClient) {

  }

  getQuiz(id: number) {
    console.log('executed service: getQuiz');
    // tslint:disable-next-line:ban-types
    return this.http.get<Quiz>(`http://localhost:8080/questions/getquiz/${id}`);
  }

  getQuizList() {
    console.log('executed service: getQuizList');
    return this.http.get<Array<Quiz>>(`http://localhost:8080/questions/getquiz/all`);
  }
}
