import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './login/login.component';
import { ManagerviewComponent } from './managerview/managerview.component';
import { PollSessionDetailComponent } from './managerview/poll-session-detail/poll-session-detail.component';
import { RegisterComponent } from './register/register.component';
import { PollSessionDetailVoterComponent } from './voterview/poll-session-detail-voter/poll-session-detail-voter.component';
import { VoterviewComponent } from './voterview/voterview.component';

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
    path: "manager",
    children: [
      {
        path: "",
        component: ManagerviewComponent
      },
      {
        path: ":id",
        component: PollSessionDetailComponent
      },
      {
        path: ":id/:pollid",
        component: PollSessionDetailComponent
      }
    ]
  },
  {
    path: "voter",
    children: [
      {
        path: "",
        component: VoterviewComponent
      },
      {
        path: ":id",
        component: PollSessionDetailVoterComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
