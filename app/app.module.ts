import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms'; // Needed a.o. for two-way binding. This line is not enought to actually use it.

import './rxjs-extensions';

import { AppComponent }  from './app.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ], // Add FormsModule here in order to use it.
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { 


}
