import { Component, Input, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../app.reducer';
import { create, createReplyOnComment } from '../comment/comment.actions';
import { Comment } from '../models/comment';
import { Reply } from '../models/reply';

@Component({
  selector: 'app-reply-input',
  templateUrl: './reply-input.component.html',
  styleUrls: ['../shared/comments-styles.component.scss']
})
export class ReplyInputComponent implements OnInit {

  @Input() parametro!: string;
  txtInput: FormControl;
  commentId: number = 0;
  
  valueInput: any;

  constructor(private store: Store<AppState>) { 
    this.txtInput = new FormControl('', Validators.required);
  }

  ngOnInit(): void {}

  addComment(commentId:number = 0) {

    this.commentId = commentId;
    if(this.txtInput.invalid) { return; }

    if(commentId === 0) {
      let test = {comment: new Comment(this.txtInput.value, "bairp", 1,  ), commentId};
      console.log(test)
      this.store.dispatch(create({comment: new Comment(this.txtInput.value, "bairp", 1,  )}));
    }
    else{
      let test  ={comment: new Comment(this.txtInput.value, "bairp", 1,  ), commentId};
      console.table("esta entrando o no" +({test}))
      //this.store.dispatch(createReplyOnComment(test.reply));
    }

    return this.txtInput.reset();
    
  }

}
