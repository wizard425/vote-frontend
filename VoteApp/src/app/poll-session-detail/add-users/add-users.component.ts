import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PollService } from 'src/app/services/poll.service';
import { Location } from '@angular/common';


@Component({
  selector: 'vo-add-users',
  templateUrl: './add-users.component.html',
  styleUrls: ['./add-users.component.scss']
})
export class AddUsersComponent implements OnInit {

  allusers: any;
  checkedUser: any[] = [];

  constructor(private pollService: PollService,
    private activatedRoute: ActivatedRoute,
    private location: Location) { }

  ngOnInit(): void {
    this.allusers = this.pollService.getAllUsers();
    let pollSessionId = this.activatedRoute.snapshot.params.id;
    if (pollSessionId)
      this.checkedUser = this.pollService.getAllUsersFromPollSession(pollSessionId);
  }

  updateChange(user: any, event: any) {
    if (event.target.checked) {
      this.checkedUser.push(user);
    } else {
      this.checkedUser = this.checkedUser.filter(x => x.id != user.id);
    }
  }

  save() {
    let idArr: number[] = [];
    this.checkedUser.forEach(u => idArr.push(u.id));
    this.pollService.addUserToPollSession(this.activatedRoute.snapshot.params.id, idArr);
    this.location.back();
  }
}
