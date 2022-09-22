import { Component, OnInit, Input } from '@angular/core';
import { Comment } from '../models/comment';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['../shared/comments-styles.component.scss']
})
export class CommentComponent implements OnInit {

  constructor() { }

  @Input() comment?: Comment;

  ngOnInit(): void {
  }

}
