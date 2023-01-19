import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  @Output() addStringData : EventEmitter<string> = new EventEmitter();
  addData: string = "Data from add component";
  inputValue = 0;



  AddOut(){
    this.addStringData.emit(this.addData);
  }


}
