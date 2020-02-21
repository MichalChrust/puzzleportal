import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from 'src/app/services/login-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  username: string;
  password: string;
  message: any;

  constructor(private service: LoginServiceService, private router: Router) { }

  ngOnInit() {
  }

  performLogin(){
    let resp = this.service.login(this.username, this.password);
    resp.subscribe(data => {
      this.message = data;
      this.router.navigate(["/home"]);
    });
  }
}
