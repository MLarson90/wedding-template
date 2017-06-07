import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from 'app/welcome/welcome.component';
import { ScheduleComponent } from 'app/schedule/schedule.component';
import { TravelComponent } from 'app/travel/travel.component';

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
  }
  ];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
