import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {HelpMessage} from '../models/HelpMessage';


@Injectable({
  providedIn: 'root'
})
export class HelpService {

  constructor(private http: HttpClient) {

  }


  // eslint-disable-next-line
  sendHelpMessage(helpMessage: HelpMessage) {
    console.log('executed service');
    // tslint:disable-next-line:ban-types
    return this.http.post<HelpMessage>(`http://localhost:8081/help`, helpMessage);
  }
}
