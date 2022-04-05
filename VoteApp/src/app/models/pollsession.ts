export class Poll {
    id: string = "";
    title: string = "";
    choices: Choice[] = [];
    status: PollStatus = 1;
    multipleChoice: boolean | undefined;
}

export class Choice {
    id: string = "";
    text: string = "";
}

export enum PollSessionStatus {
    Created = 1,
    Started,
    Closed,
    Tallied
}

export enum PollStatus {
    Open = 1,
    Closed
}

export class PollSession {
    id: string ="";
    date: Date = new Date();
    users: number[] = [];
    polls: Poll[] = [];
    status: PollSessionStatus = 1;
}