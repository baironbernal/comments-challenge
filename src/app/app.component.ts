import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-comments-challenge';

  comments?:Comment;

  constructor(private httpClient: HttpClient){}
  ngOnInit() {
    this.httpClient.get("assets/data.json").subscribe(data =>{
        console.log(data);
    }); 
  }
}
