import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-subtract',
  templateUrl: './subtract.component.html',
  styleUrls: ['./subtract.component.css']
})
export class SubtractComponent {
  @Output() subtractStringData : EventEmitter<string> = new EventEmitter();
  subtractData: string = "Data from subtract component";

  inputValue = 0;

  SubtractOut(){
    this.subtractStringData.emit(this.subtractData);
  }

}
