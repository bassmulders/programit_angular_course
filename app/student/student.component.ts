// When creating a new component, always first import Component:
import { Component }      from '@angular/core';

import { Student }        from './student';
import { StudentService } from './student.service';


// Annotation @Component tells Angular that this is a component.
@Component({
  selector:     'my-student',
  templateUrl:  'app/student/student.component.html', // In 'normal' angular we have to specify the hole path, in Angular-CLI you can do relative path.
  styleUrls:    [ 'app/student/student.component.css' ],
  providers:    [ StudentService ]
})
export class StudentComponent {
  student1: Student = new Student;
  student2: Student;
  students: Student[] = [];

  constructor(private studentService: StudentService) {
    this.student1.firstName = "Jan";
    this.student1.lastName = "Jansen";
    this.student2 = new Student;
    this.student2.firstName = "Bilbo";
    this.student2.lastName = "Baggins";
  }

  fillStudents() {
    this.students.push(this.student1);
    this.students.push(this.student2);
  }

  clearStudents() {
    this.students.pop();
  }
}