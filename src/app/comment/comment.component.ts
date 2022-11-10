import { Component, OnInit, Input } from '@angular/core';
import { Comment } from '../models/comment';
import { ReplyInputComponent } from '../reply-input/reply-input.component';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['../shared/comments-styles.component.scss']
})
export class CommentComponent implements OnInit {

  public newReply: any = '';
  constructor() { }

  @Input() comment!: Comment;

  reply(username: any, commentId: number = 0) {
    
  }

  ngOnInit(): void {
  }

}
