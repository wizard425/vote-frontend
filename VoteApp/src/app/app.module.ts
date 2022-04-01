import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ManagerviewComponent } from './managerview/managerview.component';
import { VoterviewComponent } from './voterview/voterview.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { PollSessionDetailComponent } from './managerview/poll-session-detail/poll-session-detail.component';
import { PollSessionDetailVoterComponent } from './voterview/poll-session-detail-voter/poll-session-detail-voter.component';
import { VoteViewComponent } from './voterview/vote-view/vote-view.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ManagerviewComponent,
    VoterviewComponent,
    LandingPageComponent,
    PollSessionDetailComponent,
    PollSessionDetailVoterComponent,
    VoteViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
