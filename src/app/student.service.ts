import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Observable, Subject } from 'rxjs';

import { environment } from 'src/environments/environment';
import { Student } from './student';


@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private apiServerUrl= environment.apiBaseURl;
  private subject = new Subject<any>();

  constructor(private http:HttpClient) { }

  public getStudents() : Observable<Student[]>{
    return this.http.get<Student[]>(`${this.apiServerUrl}/student`);
  }

  public addStudent(student: Student) : Observable<Student>{
    return this.http.post<Student>(`${this.apiServerUrl}/student`, student);
  }

   sendClickEvent(){
     this.subject.next(null);

   }
   getClickEvent():Observable<any>{
     return this.subject.asObservable();
   }
  
}
