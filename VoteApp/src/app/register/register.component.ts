import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PollService } from '../services/poll.service';

@Component({
  selector: 'vo-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder,
    private pollService: PollService,
    private router: Router) {
    this.form = this.fb.group({});
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      username: ["tet", Validators.required],
      password: "",
      passwordVerify: "",
      isManager: true
    });
  }

  signup() {
    console.log("hier")
    if (this.form.valid) {
      if (this.form.controls.password.value == this.form.controls.passwordVerify.value) {
        let user = this.form.value;
        user.isManager = this.form.controls.isManager.value == "true";
        this.pollService.addUser(user);
        localStorage.setItem("ismanager", this.form.controls.isManager.value);
        this.router.navigate(["/home"]);
      } else
        alert("Passwords are not the same");
    }
  }
}
