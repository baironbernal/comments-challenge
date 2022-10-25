import { Component, OnInit, Input, ViewContainerRef, ViewChild } from '@angular/core';
import { Comment } from '../models/comment';
import { ReplyInputComponent } from '../reply-input/reply-input.component';
import { CreateComponentService } from '../services/shared/create-component.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['../shared/comments-styles.component.scss']
})
export class CommentComponent implements OnInit {

  public newReply: any = '';
  constructor(private createCompServ: CreateComponentService) { }

  @ViewChild('replies_comments',{read:ViewContainerRef}) replies_comments!: ViewContainerRef;
  @Input() comment!: Comment;

  createComponentReply(username: any, commentId: number) {
    this.createCompServ.createComponent(this.replies_comments,ReplyInputComponent, username, commentId);
  }

  ngOnInit(): void {
  }

}
