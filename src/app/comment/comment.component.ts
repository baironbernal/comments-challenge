import { Component, OnInit, Input, ViewContainerRef, ViewChild } from '@angular/core';
import { Comment } from '../models/comment';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['../shared/comments-styles.component.scss']
})
export class CommentComponent implements OnInit {

  public newReply: any = '';
  constructor() { }

  @ViewChild('replies_comments',{read:ViewContainerRef}) replies_comments!: ViewContainerRef;
  @ViewChild('mainInput') mainInput: any;
  
  @Input() comment!: Comment;

  createComponentReply(username: any, commentId: number) {
    
  }

  ngOnInit(): void {
    console.log(this.mainInput)
  }

}
