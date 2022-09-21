import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CommentComponent } from './comment/comment.component';
import { CommentReplyComponent } from './comment-reply/comment-reply.component';
import { ReplyComponent } from './reply/reply.component';
import { ReplyInputComponent } from './reply-input/reply-input.component';

@NgModule({
  declarations: [
    AppComponent,
    CommentComponent,
    CommentReplyComponent,
    ReplyComponent,
    ReplyInputComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
