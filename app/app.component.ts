import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularProject_Albert';
  score = 'Score: '
  inputValue = 0;
  addDataRecieved : string = "";



  recieveAdd(){
    this.inputValue++;
  }
  recieveSubtract(){
    this.inputValue--;
  }

  RecieveData(event: string){
    console.log(event);
    this.addDataRecieved = event;

  }

}
