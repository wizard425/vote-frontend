import { Component, OnInit } from '@angular/core';
import { PollService } from 'src/app/services/poll.service';

@Component({
  selector: 'vo-add-users',
  templateUrl: './add-users.component.html',
  styleUrls: ['./add-users.component.scss']
})
export class AddUsersComponent implements OnInit {

allusers: any;

  constructor(private pollService: PollService) { }

  ngOnInit(): void {
    this.allusers = this.pollService.getAllUsers();
  }

}
