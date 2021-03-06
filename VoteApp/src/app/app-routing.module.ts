import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginActivate } from './base/loggedin.guard';
import { NotLoggedInActivate } from './base/notlogged.guard';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './login/login.component';
import { PollDetailComponent } from './poll-detail/poll-detail.component';
import { AddUsersComponent } from './poll-session-detail/add-users/add-users.component';
import { PollSessionDetailComponent } from './poll-session-detail/poll-session-detail.component';
import { PollSessionsComponent } from './poll-sessions/poll-sessions.component';
import { RegisterComponent } from './register/register.component';
import { VoteComponent } from './vote/vote.component';

const routes: Routes = [
  {
    path: "",
    redirectTo : "welcome",
    pathMatch: "full"
  },
  {
    path: "welcome",
    component: LandingPageComponent
  },
  {
    path: "login",
    component: LoginComponent,
    canActivate: [NotLoggedInActivate]
  },
  {
    path: "signup",
    component: RegisterComponent
  },
  {
    path: "home",
    canActivate: [LoginActivate],
    children: [
      {
        path: "",
        component: PollSessionsComponent
      },
      {
        path: "add",
        component: PollSessionDetailComponent
      },
      {
        path: "add/users",
        component: AddUsersComponent
      },
      {
        path: ":id/add",
        component: PollDetailComponent
      },
      {
        path: ":id",
        component: PollSessionDetailComponent
      },
      {
        path: ":id/users",
        component: AddUsersComponent
      },
      {
        path: ":id/edit/:pollid",
        component: PollDetailComponent
      },
      {
        path: ":id/vote/:pollid",
        component: VoteComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
