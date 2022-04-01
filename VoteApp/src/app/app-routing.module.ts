import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './login/login.component';
import { ManagerviewComponent } from './managerview/managerview.component';
import { PollSessionDetailComponent } from './managerview/poll-session-detail/poll-session-detail.component';
import { RegisterComponent } from './register/register.component';
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
        path: "pollsession/:id",
        component: PollSessionDetailComponent
      }
    ]
  },
  {
    path: "voter",
    component: VoterviewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
