import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Comment } from '../models/comment';
import { ReplyInputComponent } from '../reply-input/reply-input.component';
import { AppState } from '../state/app.state';
import { createInputReply } from '../state/actions/comment.actions';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['../shared/comments-styles.component.scss']
})
export class CommentComponent implements OnInit {

  public newReply: any = '';
  constructor(private store: Store<AppState>) { }

  @Input() comment!: Comment;

  reply(username: any, commentId: number = 0) {
    this.store.dispatch(createInputReply({username, commentId}))
  }

  ngOnInit(): void {
  }

}
