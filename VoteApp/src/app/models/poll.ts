export enum PollStatus{
    created = 1,
    started,
    closed,
    tallied
}

export class Poll{
    id: string = "";
    title: string = "";
    status: PollStatus = PollStatus.created;
}