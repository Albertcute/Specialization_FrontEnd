import { Component } from '@angular/core';
import { Task } from './task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Specialization';
  isAddTask = false;
  taskList: Task[] = [
    {
      id:0,
      name: "Washing",
      description: "Manually wash the clothes",
      assign: "Albert"

    },
    {
    id: 1,
    name: "Swipping",
    description: "Manually swip the floor",
    assign: "James"

  },
  {
    id:2,
    name: "Grooming",
    description: "Groom the grass  on the lawn",
    assign: "Hannah"
  }

  ]
  // how to create form with data driven forms
  addTask(task: Task){
    // console.log(student);
    this.taskList.push(task);
    this.isAddTask = false;
  }

  addNewTask(){
    this.isAddTask = true;


  }

}
