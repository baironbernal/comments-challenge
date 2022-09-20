import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CommentComponent } from './comment/comment.component';
import { CommentReplyComponent } from './comment-reply/comment-reply.component';
import { ReplyComponent } from './reply/reply.component';

@NgModule({
  declarations: [
    AppComponent,
    CommentComponent,
    CommentReplyComponent,
    ReplyComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }