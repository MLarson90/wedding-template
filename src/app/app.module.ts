import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { routing } from './app.routing';
import { ScheduleComponent } from './schedule/schedule.component';
import { TravelComponent } from './travel/travel.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    ScheduleComponent,
    TravelComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
