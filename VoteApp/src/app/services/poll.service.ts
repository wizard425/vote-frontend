import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PollStatus } from '../models/poll';
import { PollSession } from '../models/pollsession';

@Injectable({
  providedIn: 'root'
})
export class PollService {
  pollsessions : PollSession[] = [
    {
      id: "1234567",
      date: new Date(),
      polls: [
        {
          id: "001234",
          status: PollStatus.created,
          title: "Who is the best?"
        }
      ],
      status: 'ended'
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
    }]
  constructor(private http: HttpClient) { }

  getAllSessions(): Observable<PollSession[]>{
    return new Observable(observer => {
      observer.next(this.pollsessions);
    });
  }

  getPollSessionById(id: string): Observable<PollSession> {
    return new Observable(observer => {
      observer.next(this.pollsessions.find(x => x.id == id));
    });
  }

  getAllPollSessionsFromUser (): Observable<PollSession[]> {
    return new Observable(observer => {
      observer.next(this.pollsessions);
    });
  }
}
