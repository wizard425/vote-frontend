import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BaseComponent } from '../base/base.component';
import { PollService } from '../services/poll.service';

@Component({
  selector: 'vo-poll-detail',
  templateUrl: './poll-detail.component.html',
  styleUrls: ['./poll-detail.component.scss']
})
export class PollDetailComponent extends BaseComponent implements OnInit {

  poll: any;

  constructor(private pollService: PollService,
    private activatedRoute: ActivatedRoute) {
      super();
    }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(route => {
      this.poll = this.pollService.getPoll(route.id, route.pollid);
    })
  }

}
