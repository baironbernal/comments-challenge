import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../app.reducer';
import { create } from '../comment/comment.actions';

@Component({
  selector: 'app-reply-input',
  templateUrl: './reply-input.component.html',
  styleUrls: ['../shared/comments-styles.component.scss']
})
export class ReplyInputComponent implements OnInit {

  txtInput: FormControl;
  constructor(private store: Store<AppState>) { 
    this.txtInput = new FormControl('', Validators.required)
  }

  ngOnInit(): void {
  }

  addComment() {
    if(this.txtInput.invalid) { return; }

    this.store.dispatch(create(this.txtInput.value))

    this.txtInput.reset()
  }

}
