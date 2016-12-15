import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StudentComponent }     from './student/student.component';

import './rxjs-extensions';

const routes: Routes = [ // Create an array of json objects
  { path: '', redirectTo: '/student', pathMatch: 'full' },
  { path: 'student', component: StudentComponent }
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {

}