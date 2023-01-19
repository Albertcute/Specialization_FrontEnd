import { Component, Output, EventEmitter } from '@angular/core';
// how to create form with data driven forms "apil ang output ug eventemitter sa ibabaw"
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent {

  @Output() studentOut= new EventEmitter()
  ngOnInit(){
    this.studentForm.reset();
  }

  // how to create form with data driven forms

  studentForm = new FormGroup ({

    firstName: new FormControl(''),
    lastName: new FormControl(''),
    age: new FormControl(0),
    gender: new FormControl(''),
    nationality: new FormControl(''),
    degree: new FormControl('')
  })

  addStudent(){
    // console.log(this.studentForm.value)

    this.studentOut.emit(this.studentForm.value)
    this.studentForm.reset();

  }

}
