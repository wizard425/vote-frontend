import { Component, OnInit } from '@angular/core';
import { PollSession } from '../models/pollsession';
import { PollService } from '../services/poll.service';

@Component({
  selector: 'vo-managerview',
  templateUrl: './managerview.component.html',
  styleUrls: ['./managerview.component.scss']
})
export class ManagerviewComponent implements OnInit {

  pollsessions: PollSession[] = [];

  constructor(private pollService: PollService) { }

  ngOnInit(): void {
    console.log(this.pollsessions);
    this.getAllPollsessions();
  }

  getAllPollsessions(){
    this.pollService.getAllSessions().subscribe( pollsess => {
      this.pollsessions = pollsess;
    })
  }

}
