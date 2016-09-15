import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home.component'
import { Login } from "./components/login.component";
import { RegisterComponent } from "./components/register.component";

const appRoutes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'register', component: RegisterComponent
  },
  {
    path: 'login', component: Login
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);