import { Component, Input, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../app.reducer';
import { create } from '../comment/comment.actions';
import { Comment } from '../models/comment';

@Component({
  selector: 'app-reply-input',
  templateUrl: './reply-input.component.html',
  styleUrls: ['../shared/comments-styles.component.scss']
})
export class ReplyInputComponent implements OnInit {

  @Input() parametro!: string;
  txtInput: FormControl;
  comment: Comment = new Comment();
  valueInput: any;

  constructor(private store: Store<AppState>) { 
    this.txtInput = new FormControl('', Validators.required);
    
  }

  ngOnInit(): void {
    console.log(this.valueInput)
  }

  addComment(commentId:number = 0) {
    if(this.txtInput.invalid) { return; }
    if(commentId!) {
      this.comment = new Comment(this.txtInput.value, "bairp", 1 );
      this.store.dispatch(create({comment: this.comment}));
      return this.txtInput.reset();
    }

    //crea un repply

    
    
    
  }

}
