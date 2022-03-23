import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, Output } from '@angular/core';
import {  NgForm,  } from '@angular/forms';
import { Student } from 'src/app/student';
import { StudentService } from 'src/app/student.service';
import { Subscription } from 'rxjs';
import { StudentListComponent } from '../student-list/student-list.component';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {




  constructor(private studentService:StudentService) {
   
  
     
   
   }
   ngOnInit():void {
   
    
  }

  
  public onAddStudent(addForm:NgForm): void{
    this.studentService.addStudent(addForm.value).subscribe(
      (respone:Student)=>{
        console.log(respone);
        

      },
      (error:HttpErrorResponse)=>{
        alert(error.message);
      }
      );
    
   this.resetForm(addForm);

  }
  
  resetForm(addForm:NgForm):void{
    addForm.reset();
  }

  
  }



 






