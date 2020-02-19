import { Component, OnInit } from '@angular/core';
import {HelpService} from '../../../services/HelpService';
import {HelpMessage} from '../../../models/HelpMessage';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css']
})
export class HelpComponent implements OnInit {
  email = '';
  emailStatus = 2;
  emailInvalid = false;
  message = '';
  messageStatus = 2;
  messageInvalid = false;
  messageType = '';
  private helpMessage: HelpMessage;
  constructor(private helpService: HelpService) {
  }

  ngOnInit() {
  }
  checkEmail() {
    if (this.email.match('([a-z 1-9 ._-])*@[a-z]+.[a-z]{2,3}')) {
      this.emailStatus = 0;
      this.emailInvalid = false;
    } else {
      this.emailStatus = 1;
      this.emailInvalid = true;
    }
  }
  checkMessage() {
    if (this.message.length < 1 || this.message.length > 500) {
       this.messageStatus = 1;
       this.messageInvalid = true;
    } else {
      this.messageStatus = 0;
      this.messageInvalid = false;
    }
  }
  sendMessage() {
    // tslint:disable-next-line:max-line-length
    this.helpMessage = new HelpMessage(this.messageType, this.message, this.email);
    this.helpService.createCourse(this.helpMessage).subscribe(helpMessage => this.helpMessage.valueOf());
  }
}
