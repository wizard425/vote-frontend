import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BaseComponent } from '../base/base.component';
import { PollService } from '../services/poll.service';

@Component({
  selector: 'vo-poll-sessions',
  templateUrl: './poll-sessions.component.html',
  styleUrls: ['./poll-sessions.component.scss']
})
export class PollSessionsComponent extends BaseComponent implements OnInit {

  pollsessions: any;

  constructor(private pollService: PollService, private router: Router) {
    super();
  }

  ngOnInit(): void {
    this.pollsessions = this.pollService.getAllPollSessions();
  }

  logout() {
    localStorage.removeItem("ismanager");
    this.router.navigate(["welcome"]);
  }

  // gets called when user opens license-modal and clicks Request
  requestLicense() {

  }

  // gets called when user opens license-modal and clicks Connect
  connectLicense() {

  }

}
