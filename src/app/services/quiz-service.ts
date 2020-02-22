import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Quiz} from '../models/Quiz';
import {QuizShortcut} from '../models/QuizShortcut';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private http: HttpClient) {

  }

  getQuiz(id: number) {
    console.log('executed service: getQuiz');
    // tslint:disable-next-line:ban-types
    return this.http.get<Quiz>(`http://localhost:8081/quizgame/${id}`);
  }

  getQuizList(): Observable<Array<QuizShortcut>> {
    console.log('executed service: getQuizList');
    return this.http.get<Array<QuizShortcut>>(`http://localhost:8081/quizgame/info`);
  }

  // eslint-disable-next-line
  sendResult(points: number) {
    console.log('executed service: sendResult');
    // tslint:disable-next-line:ban-types
    return this.http.post<number>(`http://localhost:8081/user/result/${points}`, points);
  }
}
