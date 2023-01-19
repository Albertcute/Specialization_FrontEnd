import { Component } from '@angular/core';
// 19/01/23
import { HttpService } from '../http.service';
import { Album } from '../album';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent {

  albums!: Album[]
  constructor(private httpService: HttpService){}
  ngOnInit(){
    // console.log('first component');

    this.httpService.getData('https://jsonplaceholder.typicode.com/albums')
    .subscribe(data => {
      // console.table(data);
      this.albums = data as Album[];
    })
  }

}
