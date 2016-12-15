// When creating a new component, always first import Component:
import { Component, OnInit }      from '@angular/core';

import { Student }        from './student';
import { StudentService } from './student.service';


// Annotation @Component tells Angular that this is a component.
@Component({
  selector:     'my-student',
  templateUrl:  'app/student/student.component.html', // In 'normal' angular we have to specify the hole path, in Angular-CLI you can do relative path.
  styleUrls:    [ 'app/student/student.component.css' ],
  providers:    [ StudentService ]
})
export class StudentComponent implements OnInit {
  student1: Student;
  student2: Student;
  students: Student[] = [];

  constructor(private studentService: StudentService) {
    this.student1 = this.studentService.getStudent(1);
    this.student2 = this.studentService.getStudent(2);
  }

  ngOnInit() {
    this.studentService.getStudentById(1).subscribe(s => this.student1 = s)
  }

  fillStudents() {
    this.students.push(this.student1);
    this.students.push(this.student2);
  }

  clearStudents() {
    this.students.pop();
  }
}