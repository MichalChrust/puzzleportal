import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {
  email = '';
  nick = '';
  password = '';
  repeatedPassword = '';
  nickInvalid = false;
  emailInvalid = false;
  passwordInValid = false;
  nickStatus = 2;
  emailStatus = 2;
  passwordStatus = 2;

  constructor() {
  }

  ngOnInit() {
  }

  checkNick() {
    if (this.nick.length < 8) {
      this.nickStatus = 1;
      this.nickInvalid = true;
    } else {
      this.nickStatus = 0;
      this.nickInvalid = false;
    }
  }

  // TODO
  // This function doesn't work
  checkEmail() {
    if (this.email.match('([a-z 1-9 ._-])*@[a-z]+.[a-z]{2,3}')) {
      this.emailStatus = 0;
      this.emailInvalid = false;
    } else {
      this.emailStatus = 1;
      this.emailInvalid = true;
    }
  }

  checkPassword() {
    if (this.repeatedPassword !== this.password || this.password === '' ||
      this.password.length < 8 ||
      !this.password.match('[1-9]') ||
      !this.password.match('[a-z]') ||
      !this.password.match('[A-Z]')) {
      this.passwordStatus = 1;
      this.passwordInValid = true;
    } else {
      this.passwordStatus = 0;
      this.passwordInValid = false;
    }
  }
}
