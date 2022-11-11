import { Component, Input, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../state/app.state';
import { Comment } from '../models/comment';
import { create } from '../state/actions/comment.actions';

@Component({
  selector: 'app-reply-input',
  templateUrl: './reply-input.component.html',
  styleUrls: ['../shared/comments-styles.component.scss']
})
export class ReplyInputComponent implements OnInit {

  @Input() parametro!: string;
  txtInput: FormControl;
  comment: Comment = new Comment(0,'');
  valueInput: any;
  username!: string;
  commentId!: number;
  replyId!: number;

  constructor(private store: Store<AppState>) {
    this.txtInput = new FormControl('', Validators.required);
  }

  ngOnInit(): void {
    console.log(this.username, this.commentId, this.replyId)
  }

  addComment(commentId:number = 0) {
    if(this.txtInput.invalid) { return; }
    if(!commentId) {
      this.comment = new Comment(Math.random(),this.txtInput.value, "bairp",  1);
      this.store.dispatch(create({comment: this.comment}));
      return this.txtInput.reset();
    }
  }

}
