import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PollSession } from 'src/app/models/pollsession';
import { PollService } from 'src/app/services/poll.service';

@Component({
  selector: 'vo-poll-session-detail-voter',
  templateUrl: './poll-session-detail-voter.component.html',
  styleUrls: ['./poll-session-detail-voter.component.scss']
})
export class PollSessionDetailVoterComponent implements OnInit {

  pollsession: PollSession = new PollSession();

  constructor(private pollService: PollService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(route => {
      this.getPollSession(route.id);
    })
  }


  getPollSession(id: string) {
    this.pollService.getPollSessionById(id).subscribe(res => this.pollsession = res);
  }

}
