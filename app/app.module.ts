import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms'; // Needed a.o. for two-way binding. This line is not enought to actually use it.
import { HttpModule }    from '@angular/http';  // Needed to be able to use Http in other parts of the the app. 

import './rxjs-extensions';

import { AppComponent }  from './app.component';
import { StudentComponent } from './student/student.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule ], // Add FormsModule here in order to use it.
  declarations: [ AppComponent, StudentComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { 


}
