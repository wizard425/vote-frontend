import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './login/login.component';
import { PollDetailComponent } from './poll-detail/poll-detail.component';
import { PollSessionDetailComponent } from './poll-session-detail/poll-session-detail.component';
import { PollSessionsComponent } from './poll-sessions/poll-sessions.component';
import { RegisterComponent } from './register/register.component';
import { VoteComponent } from './vote/vote.component';

const routes: Routes = [
  {
    path: "welcome",
    component: LandingPageComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "signup",
    component: RegisterComponent
  },
  {
    path: "home",
    children: [
      {
        path: "",
        component: PollSessionsComponent
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
