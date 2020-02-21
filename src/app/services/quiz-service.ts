import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {HelpMessage} from '../models/HelpMessage';
import {Quiz} from '../models/Quiz';
import {QuizShortcut} from '../models/QuizShortcut';


@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private http: HttpClient) {

  }

  getQuiz(id: number) {
    console.log('executed service: getQuiz');
    // tslint:disable-next-line:ban-types
    return this.http.get<Quiz>(`http://localhost:8080/quizgame/${id}`);
  }

  getQuizList() {
    console.log('executed service: getQuizList');
    return this.http.get<Array<QuizShortcut>>(`http://localhost:8080/quizgame/info`);
  }

  // eslint-disable-next-line
  sendResult(points: number) {
    console.log('executed service: sendResult');
    // tslint:disable-next-line:ban-types
    return this.http.post<number>(`http://localhost:8080/user/result/${points}`, points);
  }
}
