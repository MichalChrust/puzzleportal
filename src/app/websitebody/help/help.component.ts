import { Component, OnInit } from '@angular/core';
import {MainPageComponent} from '../main-page/main-page.component';

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
  constructor() {
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
       console.log(this.messageStatus);
    } else {
      this.messageStatus = 0;
      this.messageInvalid = false;
      console.log(this.messageStatus);
    }
  }
}
