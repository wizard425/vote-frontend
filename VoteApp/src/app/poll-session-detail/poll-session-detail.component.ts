import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PollService } from 'src/app/services/poll.service';
import { BaseComponent } from '../base/base.component';
import { PollSession } from '../models/pollsession';
import { v4 as uuidv4 } from 'uuid';



@Component({
  selector: 'vo-poll-session-detail',
  templateUrl: './poll-session-detail.component.html',
  styleUrls: ['./poll-session-detail.component.scss']
})
export class PollSessionDetailComponent extends BaseComponent implements OnInit {

  isNew: boolean = true;
  pollsession: PollSession = this.pollService.emptyPollSession;
  users: any;
  allUsers: any;

  status = [
    "Created",
    "Started",
    "Closed",
    "Tallied"
  ]

  constructor(private pollService: PollService,
    private activatedRoute: ActivatedRoute,
    private router: Router) {
    super();
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(res => {
      let pollSess = this.pollService.getPollSessionById(res.id);
      if (pollSess) {
        this.pollsession = pollSess;
        this.users = this.pollService.getAllUsersFromPollSession(res.id);
        this.isNew = false;
      } else {
        this.pollsession = this.pollService.emptyPollSession;
      }
    })
  }

  createPollSession() {
    let newPS = new PollSession();
    newPS.id = uuidv4();
    this.pollService.addPollSession(newPS);
    this.router.navigate(["/home"]);
  }
}
