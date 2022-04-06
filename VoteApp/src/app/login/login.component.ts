import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PollService } from '../services/poll.service';

@Component({
  selector: 'vo-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router,
    private pollService: PollService) { }

  ngOnInit(): void {
  }

  login() {
    let pwd = (<HTMLInputElement>document.getElementById("password")).value;
    let uname = (<HTMLInputElement>document.getElementById("username")).value;
    if (this.pollService.authenticate(uname, pwd)?.isManager == true) {
      this.router.navigate(["home"]);
      localStorage.setItem("ismanager", "true");
    } else if (this.pollService.authenticate(uname, pwd)?.isManager == false) {
      this.router.navigate(["home"]);
      localStorage.setItem("ismanager", "false");
    } else {
      alert("Password or Username incorrect");
    }
  }

}
