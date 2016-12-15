// When creating a new component, always first import Component:
import { Component } from '@angular/core';

// Annotation @Component tells Angular that this is a component.
@Component({
  selector:     'my-student',
  templateUrl:  'app/student/student.component.html' // In 'normal' angular we have to specify the hole path, in Angular-CLI you can do relative path.
})
export class StudentComponent {}