import { Component, OnInit } from '@angular/core';
import { PollSession } from '../models/pollsession';

@Component({
  selector: 'vo-managerview',
  templateUrl: './managerview.component.html',
  styleUrls: ['./managerview.component.scss']
})
export class ManagerviewComponent implements OnInit {

  pollsessions : PollSession[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
