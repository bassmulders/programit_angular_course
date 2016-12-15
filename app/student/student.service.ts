// Service is supposed to be used to manage fields of component.
import { Injectable }     from '@angular/core';
import { Observable }     from 'rxjs/Observable';
import { Http, Response } from '@angular/http';
import { Student }        from './student';

@Injectable()
export class StudentService {
  
  constructor(private http: Http ) { }

  getStudentById(id: number): Observable<Student> {
    return this.http.get("http://api.questionit.carpago.nl/students/" + id).map(res => res.json());
  }

  getStudent(nr: number): Student {
    var s: Student = new Student;
    if (nr === 1) {
      s.firstName = "Jan";
      s.lastName = "Jansen";
    } else if (nr === 2) {
      s.firstName = "Bilbo";
      s.lastName = "Baggins";
    }
    return s;
  }
}