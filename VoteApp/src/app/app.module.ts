import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { PollSessionDetailComponent } from './poll-session-detail/poll-session-detail.component';
import { PollSessionsComponent } from './poll-sessions/poll-sessions.component';
import { VoteComponent } from './vote/vote.component';
import { PollDetailComponent } from './poll-detail/poll-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    LandingPageComponent,
    PollSessionDetailComponent,
    PollSessionsComponent,
    VoteComponent,
    PollDetailComponent
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
