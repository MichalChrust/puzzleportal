import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/services/account.service';
import { Router } from '@angular/router';
import {User} from '../../../../models/usermodels/User';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  username: string;
  password: string;
  user: User;

  constructor(private accountService: AccountService, private router: Router) { }

  ngOnInit() {
  }

  performLogin() {
    console.log(this.username);
    console.log(this.password);
    this.accountService.login(this.username, this.password).subscribe((user) => {
      console.log('local user before merge');
      console.log(this.user);
      console.log('sent user before merge');
      console.log(user);
      this.user = user;
      console.log('local user after merge');
      console.log(this.user);
      // this.router.navigate(["/home"]);
    });
  }
}
