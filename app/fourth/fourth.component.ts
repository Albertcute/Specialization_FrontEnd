import { Component } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-fourth',
  templateUrl: './fourth.component.html',
  styleUrls: ['./fourth.component.css']
})
export class FourthComponent {
  constructor(private httpService: HttpService){}
  ngOnInit(){
    // console.log('first component');

    this.httpService.getData('https://jsonplaceholder.typicode.com/users')
    .subscribe(data => {
      console.table(data);
    })
  }

}
