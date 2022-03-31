import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ManagerviewComponent } from './managerview/managerview.component';
import { RegisterComponent } from './register/register.component';
import { VoterviewComponent } from './voterview/voterview.component';

const routes: Routes = [
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
    component: ManagerviewComponent
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
