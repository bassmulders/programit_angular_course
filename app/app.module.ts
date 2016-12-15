import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms'; // Needed a.o. for two-way binding. This line is not enought to actually use it.
import { HttpModule }    from '@angular/http';  // Needed to be able to use Http in other parts of the the app. 

//import './rxjs-extensions'; // Must be moved to app-routing.module.ts to use the routing functionality

import { AppComponent }  from './app.component';
import { StudentComponent } from './student/student.component';
import { AppRoutingModule } from './app-routing.module'; // Must be imported to use routing

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule, // Add FormsModule here in order to use it.
    HttpModule, 
    AppRoutingModule ], // By importing AppRoutingModule we also import rxjs-extensions again
  declarations: [ AppComponent, StudentComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { 


}
