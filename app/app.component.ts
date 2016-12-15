import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h1>Examples of one-way binding:</h1>
    <h2>{{ title }}</h2>
    <input value="{{ title }}" (change)="title = $event.target.value"/><br>
    <input [value]="title" (change)="changeTitle($event)"/><br>
    <h1>Example of two-way binding:</h1>
    <input [(ngModel)]="title">
    <my-student>Loading student...</my-student>
    `
})
export class AppComponent  {  
  title: string = "Hello angular";

  changeTitle($event: any) { // In case of Angular we need to specify any, in Angular-CLI that is not necessary)
    this.title = $event.target.value;
  }
}
