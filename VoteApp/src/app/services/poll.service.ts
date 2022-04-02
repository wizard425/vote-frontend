import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PollService {
  pollsessions = [
    {
      id: "1234557",
      date: new Date(),
      polls: [
        {
          id: "001234",
          status: 1,
          title: "Who is the best?",
          answers: [{
            id: "1",
            text: "Eric"
          }, {
            id: "2",
            text: "Tom"
          }, {
            id: "3",
            text: "Marc"
          }]
        },
        {
          id: "001212",
          status: 1,
          title: "Who is the nicest?",
          answers: [{
            id: "1",
            text: "Eric"
          }, {
            id: "2",
            text: "Tom"
          }, {
            id: "3",
            text: "Marc"
          }]
        }
      ],
      status: 'ended',
      
    },
    {
      id: "12345",
      date: new Date(),
      polls: [],
      status: 'ended'
    },
    {
      id: "7654321",
      date: new Date(),
      polls: [],
      status: 'ended'
    },
    {
      id: "87878787",
      date: new Date(),
      polls: [],
      status: 'open'
    },
    {
      id: "123456711",
      date: new Date(),
      polls: [{
        id: "002433",
        title: "Who is the best?",
        status: 2
      },
      {
        id: "002343",
        title: "Find the right sentence",
        status: 2
      },
      {
        id: "0044423",
        title: "Choose all animals",
        status: 1
      }],
      status: 1
    }
  ]
  constructor(private http: HttpClient) { }

  getAllPollSessions() {
    return this.pollsessions;
  }

  getPollSessionById(id: string) {
    return this.pollsessions.find(x => x.id == id);
  }

  getPoll(pollsessionId: string, pollid: string) {
    let sess = this.pollsessions.find(x => x.id == pollsessionId);
    return sess?.polls.find(x => x.id == pollid);
  }

}
