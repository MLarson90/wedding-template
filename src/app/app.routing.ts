import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from 'app/welcome/welcome.component';

const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  }
  ];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
