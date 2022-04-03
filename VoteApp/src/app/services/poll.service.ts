import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PollService {


  // pollsessions and users = exampledata
  pollsessions = [
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

  users = [
    {
      id: "123",
      username: "User 1"
    },
    {
      id: "123",
      username: "User 2"
    },
    {
      id: "123",
      username: "User 3"
    },
    {
      id: "123",
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

  getUserOfPollSession(id: string){
    return this.users;
  }

  getPoll(pollsessionId: string, pollid: string) {
    let sess = this.pollsessions.find(x => x.id == pollsessionId);
    return sess?.polls.find(x => x.id == pollid);
  }

  get emptyPollSession() {
    return {
      id: "",
      date: new Date(),
      polls: [],
      status: 'created'
    };
  }

}
