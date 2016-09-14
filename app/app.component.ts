import { Component } from '@angular/core';

import { HomeComponent } from './components/home.component';
import { NavBarComponent } from './components/nav-bar.component';

import './rxjs-operators'

@Component({
  selector: 'my-app',
  template: `
    <nav-bar></nav-bar>
    <router-outlet></router-outlet>
  `,
  directives: [HomeComponent, NavBarComponent ]
})

export class AppComponent { }
