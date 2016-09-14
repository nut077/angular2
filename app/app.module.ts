import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, JsonpModule } from '@angular/http';
import { FormsModule } from '@angular/forms'
import { NgModule } from '@angular/core';
import { routing } from './app.routing';

import { AppComponent }  from './app.component';
import { HomeComponent } from './components/home.component';


@NgModule({
  imports:      [ BrowserModule, routing, HttpModule, JsonpModule, FormsModule ],
  declarations: [ AppComponent, HomeComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
