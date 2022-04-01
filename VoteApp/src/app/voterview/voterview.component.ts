import { Component, OnInit } from '@angular/core';
import { PollSession } from '../models/pollsession';
import { PollService } from '../services/poll.service';

@Component({
  selector: 'vo-voterview',
  templateUrl: './voterview.component.html',
  styleUrls: ['./voterview.component.scss']
})
export class VoterviewComponent implements OnInit {

  pollsessions: PollSession[] = [];

  constructor(private pollService: PollService) { }

  ngOnInit(): void {
    this.getAllPollSessionsFromUser();
  }

  getAllPollSessionsFromUser(){
    this.pollService.getAllPollSessionsFromUser().subscribe(res => {
      this.pollsessions = res;
    })
  }

  checkLicense(){

  }

}
