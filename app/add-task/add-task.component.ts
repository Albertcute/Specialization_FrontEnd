import { Component, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {
  @Output() taskOut= new EventEmitter()
  ngOnInit(){
    this.taskForm.reset();
  }

  // how to create form with data driven forms

  taskForm = new FormGroup ({

    name: new FormControl(''),
    description: new FormControl(''),
    assign: new FormControl('')
  })

  addTask(){
    // console.log(this.studentForm.value)

    this.taskOut.emit(this.taskForm.value)
    this.taskForm.reset();

  }

}
