import { Injectable } from '@angular/core';
// 19/01/23
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  // 19/01/23
  constructor(private http: HttpClient) { }

  getData(link:string){
    return this.http.get(link);
  }
}
