import { Poll } from "./poll";

export class PollSession {
    id: string = "";
    date: Date = new Date();
    polls: Poll[] = [];
    status: string = "";
    
}