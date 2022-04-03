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
  isNew: boolean = true;

  constructor(private pollService: PollService,
    private activatedRoute: ActivatedRoute) {
    super();
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(route => {
      let pollFromServcie = this.pollService.getPoll(route.id, route.pollid);
      if (pollFromServcie) {
        this.isNew = false;
        this.poll = pollFromServcie;
      } else {
        this.poll =
        {
          id: "",
          status: 1,
          title: "",
          choices: [{
            id: "",
            text: ""
          }, {
            id: "",
            text: ""
          }, {
            id: "",
            text: ""
          }]
        };
      }
    })
  }

  removeItem(index: number) {
    console.log("hier");
    this.poll?.choices.splice(index, 1);
    console.log(this.poll?.choices);
  }

}
