import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from 'app/welcome/welcome.component';
import { ScheduleComponent } from 'app/schedule/schedule.component';

const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'schedule',
    component: ScheduleComponent
  }
  ];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
