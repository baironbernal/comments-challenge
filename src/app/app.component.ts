import { Comment } from './models/comment';
import { Component, } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './state/app.state';
import { Observable } from 'rxjs';
import { selectCommentsFeature } from './state/selectors/comments.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  comments$: Observable<Comment[]> = new Observable();

  constructor(private store: Store<AppState>) {}

  trackByItem(index: Number, item: Comment){
    return item.id;
  } 

  ngOnInit(): void {
    
    this.comments$ = this.store.select(selectCommentsFeature);
    
  }

  
}
