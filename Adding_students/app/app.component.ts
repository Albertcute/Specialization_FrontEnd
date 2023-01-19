import { Component } from '@angular/core';
import { Student } from './student';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Specialization';
   // how to create form with data driven forms "kana rang isAddStudent"
  isAddStudent = false;
  studentsList: Student[] = [
    {
      id:0,
      lastName: "Penduko",
      firstName: "Pedro",
      age: 20,
      status: "Married",
      nationality: "Filipino",
      gender: "Male",
      homeaddress: "Encantadia",
      elementarySchool: "Mantalongon Elementary School",
      highSchool: "Mantalongon National High School",

    },
    {
    id: 1,
    lastName: "Monceda",
    firstName: "Albert",
    age: 22,
    status: "Single",
    nationality: "Filipino",
    degree: "BSIT",
    gender: "Male",
    homeaddress: "Mantalongon, Dalaguete, Cebu",
    elementarySchool: "Mantalongon Elementary School",
    highSchool: "Mantalongon National High School",
    College:  "University of San Carlos"
  },
  {
    id:2,
    lastName: "Cagaanan",
    firstName: "Hannah",
    age: 22,
    status: "Single",
    nationality: "Filipino",
    degree: "BEED",
    gender: "Female",
    homeaddress: "Lila, LungsodDaan, Bohol",
    elementarySchool: "Lila Elementary School",
    highSchool: "Lila National High School",
    College:  "University of San Carlos"
  }

  ]
  // how to create form with data driven forms
  addStudent(student: Student){
    // console.log(student);
    this.studentsList.push(student);
    this.isAddStudent = false;
  }

  addNewStudent(){
    this.isAddStudent = true;


  }


}
