import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Poll, PollSession } from '../models/pollsession';

@Injectable({
  providedIn: 'root'
})
export class PollService {


  // pollsessions and users = exampledata
  pollsessions: PollSession[] = [
    {
      id: "1234557",
      date: new Date(),
      polls: [
        {
          id: "001234",
          status: 1,
          title: "Who is the best?",
          multipleChoice: true,
          choices: [{
            id: "1",
            text: "Eric"
          }, {
            id: "2",
            text: "Tom"
          }, {
            id: "3",
            text: "Marc"
          }, {
            id: "4",
            text: "Gabri"
          }, {
            id: "5",
            text: "Samuel"
          }]
        },
        {
          id: "001212",
          status: 1,
          title: "Who is the nicest?",
          multipleChoice: false,
          choices: [{
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
      users: [1, 2],
      status: 2,
    },
    {
      id: "12345",
      date: new Date(),
      polls: [],
      status: 2,
      users: []
    },
    {
      id: "7654321",
      date: new Date(),
      polls: [],
      status: 1,
      users: []
    },
    {
      id: "87878787",
      date: new Date(),
      polls: [],
      status: 1,
      users: []
    },
    {
      id: "123456711",
      date: new Date(),
      polls: [{
        id: "002433",
        title: "Who is the best?",
        choices: [],
        multipleChoice: false,
        status: 2
      },
      {
        id: "002343",
        title: "Find the right sentence",
        choices: [],
        multipleChoice: false,
        status: 2
      },
      {
        id: "0044423",
        title: "Choose all animals",
        choices: [],
        multipleChoice: false,
        status: 1
      }],
      users: [1, 2],
      status: 1
    }
  ]

  users = [
    {
      id: "1",
      username: "User 1"
    },
    {
      id: "2",
      username: "User 2"
    },
    {
      id: "3",
      username: "User 3"
    },
    {
      id: "4",
      username: "User 4"
    }
  ];
  constructor(private http: HttpClient) { }

  getAllPollSessions() {
    return this.pollsessions;
  }

  getPollSessionById(id: string) {
    return this.pollsessions.find(x => x.id == id);
  }

  getAllUsers() {
    return this.users;
  }

  getPoll(pollsessionId: string, pollid: string) {
    let sess = this.pollsessions.find(x => x.id == pollsessionId);
    return sess?.polls.find(x => x.id == pollid);
  }

  addPollSession(ps: any) {
    this.pollsessions.push(ps);
  }

  addPoll(psId: any, poll: Poll) {
    (this.pollsessions.find(x => x.id == psId))?.polls.push(poll);
  }

  updatePoll(psId: any, poll: Poll) {
    let ps = this.pollsessions.find(x => x.id == psId);
    if (ps) {
      let index = this.pollsessions.indexOf(ps)
      let indexPoll = this.pollsessions[index].polls.find(x => x.id == poll.id)

      //this.pollsessions[index].polls = poll;
    }
  }

  deletePoll(psId: any, pollId: any) {
    let ps = this.pollsessions.find(x => x.id == psId);
    let index = -1;
    if (ps) {
      index = this.pollsessions.indexOf(ps);
      this.pollsessions[index].polls = ps.polls.filter(x => x.id != pollId);
    }
  }

  addUserToPollSession(pollSessionId: any, ids: any[]) {
    let pollS = this.pollsessions.find(x => x.id == pollSessionId);
    let index = -1;
    if (pollS)
      index = this.pollsessions.indexOf(pollS);

    this.pollsessions[index].users = ids;
  }

  getAllUsersFromPollSession(pollSessionId: any) {
    let ret = [];
    let sessionUsers: number[] = [];
    let uZw = this.pollsessions.find(x => x.id == pollSessionId)?.users;
    if (uZw)
      sessionUsers = uZw;
    let allUser = this.users;
    if (sessionUsers)
      for (let i = 0; i < sessionUsers?.length; i++) {
        ret.push(allUser.find(x => x.id == sessionUsers[i].toString()));
      }
    return ret;
  }

  get emptyPollSession() {
    return {
      id: "",
      date: new Date(),
      polls: [],
      status: 1,
      users: []
    };
  }
}
