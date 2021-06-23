import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent {
  title = 'testform2';
  
  private count:number = 1;

phoneNumberIds:number[] = [1];
  postId: any;

constructor(private http: HttpClient){}


remove(i:number) {
  this.phoneNumberIds.splice(i, 1);
}

add() {
  this.phoneNumberIds.push(++this.count);
}



register (ngForm: NgForm) {
  console.log('Successful registration');
  //console.log(ngForm);
  var body = ngForm.value;
  console.log(body);
 
 this.http.post<any>('http://localhost:4200/', body).subscribe(data => {})

 
}
}