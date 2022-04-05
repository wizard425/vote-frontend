import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BaseComponent } from '../base/base.component';
import { Choice } from '../models/pollsession';
import { PollService } from '../services/poll.service';
import { Location } from '@angular/common'




@Component({
  selector: 'vo-poll-detail',
  templateUrl: './poll-detail.component.html',
  styleUrls: ['./poll-detail.component.scss']
})
export class PollDetailComponent extends BaseComponent implements OnInit {

  form: FormGroup;
  choices: FormArray = new FormArray([]);

  poll: any;
  isNew: boolean = true;

  constructor(private pollService: PollService,
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private loc: Location) {
    super();
    this.form = this.fb.group({});
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(route => {
      let pollFromServcie = this.pollService.getPoll(route.id, route.pollid);
      if (pollFromServcie) {
        this.isNew = false;
        this.poll = pollFromServcie;
        this.setChoices();
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
        this.setChoices();
      }
    })
    this.form = this.fb.group({
      id: this.poll.id,
      title: this.poll.title,
      status: this.poll.status,
      multipleChoice: this.poll.multipleChoice,
      choices: this.choices
    });
  }

  removeItem(index: number) {
    this.poll?.choices.splice(index, 1);
  }

  addPoll() {
    let poll = this.form.value;
    poll.multipleChoice = this.form.value == 'true';
    this.form.value == false;
    this.pollService.addPoll(this.activatedRoute.snapshot.params.id, this.form.value);
    this.loc.back();
  }

  deletePoll() {
    console.log(this.activatedRoute.snapshot.params.pollId);

    this.pollService.deletePoll(this.activatedRoute.snapshot.params.id, this.activatedRoute.snapshot.params.pollid);
    this.loc.back();
  }

  setChoices() {
    for (let i of this.poll.choices) {
      this.choices.push(this.newPollFormControl(i))
    }
  }

  newPollFormControl(c: Choice): FormGroup {
    return new FormGroup({
      'id': new FormControl(c.id),
      'text': new FormControl(c.text)
    });
  }

  addChoiceControl() {
    console.log("add");
    this.choices.push(this.newPollFormControl(new Choice()));
    console.log(this.choices);
  }

  removeChoiceControl(i: number) {
    this.choices.removeAt(i);
  }
}
