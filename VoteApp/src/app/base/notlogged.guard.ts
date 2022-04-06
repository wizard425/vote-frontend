import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { PollService } from "../services/poll.service";

@Injectable()
export class NotLoggedInActivate implements CanActivate {
    constructor(private pollService: PollService, private router: Router) { }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        if (this.pollService.isLoggedIn()) {
            this.router.navigate(["home"]);
            return false;
        }
        return true;
    }
}