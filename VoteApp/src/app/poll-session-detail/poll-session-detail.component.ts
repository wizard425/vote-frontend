import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PollService } from 'src/app/services/poll.service';
import { BaseComponent } from '../base/base.component';
import { PollSession } from '../models/pollsession';

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

  constructor(private pollService: PollService,
    private activatedRoute: ActivatedRoute) {
    super();
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(res => {
      let pollSess = this.pollService.getPollSessionById(res.id);
      if(pollSess){
        this.pollsession = pollSess;
        this.users = this.pollService.getUserOfPollSession(res.id);
        this.isNew = false;
      }else{
        this.pollsession = this.pollService.emptyPollSession;
      }
    })
  }
}
