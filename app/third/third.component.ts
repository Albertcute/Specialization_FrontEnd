import { Component } from '@angular/core';
// 19/01/23
import { HttpService } from '../http.service';

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.css']
})
export class ThirdComponent {
  constructor(private httpService: HttpService){}
  ngOnInit(){
    // console.log('first component');

    this.httpService.getData('https://jsonplaceholder.typicode.com/todos')
    .subscribe(data => {
      console.table(data);
    })
  }

}
