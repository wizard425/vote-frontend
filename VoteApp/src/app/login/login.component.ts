import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'vo-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  users = [
    {
      username: "voter",
      password: "test",
      ismanager: false
    },
    {
      username: "manager",
      password: "test",
      ismanager: true
    }
  ]

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  login() {
    let pwd = (<HTMLInputElement>document.getElementById("password")).value;
    let uname = (<HTMLInputElement>document.getElementById("username")).value;

    if (uname == "voter" && pwd == "test") {
      this.router.navigate(["home"]);
      localStorage.setItem("ismanager", "false");
    } else if (uname == "manager" && pwd == "test") {
      this.router.navigate(["home"]);
      localStorage.setItem("ismanager", "true");
    }
  }

}
