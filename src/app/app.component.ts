import { Comment } from './models/comment';
import { Component, OnInit } from '@angular/core';
import { informacion } from '../assets/data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-comments-challenge';

  public comments:Comment[];

  constructor() {
    this.comments = [];
  }
  ngOnInit() {
   this.comments = informacion.comments;
  }
}
