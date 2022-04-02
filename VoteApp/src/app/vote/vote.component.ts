import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BaseComponent } from '../base/base.component';
import { PollService } from '../services/poll.service';

@Component({
  selector: 'vo-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.scss']
})
export class VoteComponent extends BaseComponent implements OnInit {

  poll: any;

  constructor(private pollService: PollService,
    private activatedRoute: ActivatedRoute) {
    super();
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(route => {
      this.poll = this.pollService.getPoll(route.id, route.pollid);
      console.log(this.poll);
    })
  }

}
