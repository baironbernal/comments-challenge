import { Comment } from './models/comment';
import { Component, } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './app.reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public comments:Comment[];

  constructor(private store: Store<AppState>) {
    this.comments = [];
  }

  trackByItem(index: Number, item: Comment){
    return item.id;
  } 

  ngOnInit(): void {
    this.store.subscribe(({comments}) => {
        this.comments = comments;
    });
  }

  
}
