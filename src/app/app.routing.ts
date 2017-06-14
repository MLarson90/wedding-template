import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from 'app/welcome/welcome.component';
import { ScheduleComponent } from 'app/schedule/schedule.component';
import { TravelComponent } from 'app/travel/travel.component';
import { AdminComponent } from './admin/admin.component';
import { RsvpComponent } from './rsvp/rsvp.component';
import { ThanksComponent } from './thanks/thanks.component';

const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'schedule',
    component: ScheduleComponent
  },
  {
    path: 'travel',
    component: TravelComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: 'rsvp',
    component: RsvpComponent
  },
  {
    path: 'thanks',
    component: ThanksComponent
  }
  ];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
