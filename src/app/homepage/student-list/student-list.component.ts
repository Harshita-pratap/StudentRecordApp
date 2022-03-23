import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Student } from 'src/app/student';
import { StudentService } from 'src/app/student.service';
import { FormComponent } from '../form/form.component';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
 
  
 
  public students!:Student[];
  
  

  constructor(private studentService:StudentService) {
  
   }

  ngOnInit(): void {
  
  }


  public getStudents():void{
    
    
    this.studentService.getStudents().subscribe(
      (response: Student[])=>{
        this.students=response;
      },
      (error: HttpErrorResponse)=>{
        alert(error.message);
      }
      
    );
    
  }
}
