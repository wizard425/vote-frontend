import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../base/base.component';
import { PollService } from '../services/poll.service';

@Component({
  selector: 'vo-poll-sessions',
  templateUrl: './poll-sessions.component.html',
  styleUrls: ['./poll-sessions.component.scss']
})
export class PollSessionsComponent extends BaseComponent implements OnInit {

  pollsessions : any;

  constructor(private pollService: PollService) {
    super();
  }

  ngOnInit(): void {
    this.pollsessions = this.pollService.getAllPollSessions();
  }

}
