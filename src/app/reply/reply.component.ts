import { Component, OnInit, Input, ViewChild, ViewContainerRef } from '@angular/core';
import { Reply } from '../models/reply';
import { ReplyInputComponent } from '../reply-input/reply-input.component';
import { CreateComponentService } from '../services/shared/create-component.service';

@Component({
  selector: 'app-reply',
  templateUrl: './reply.component.html',
  styleUrls: ['../shared/comments-styles.component.scss']
})
export class ReplyComponent implements OnInit {

  public newReply: any = '';
  constructor(private createCompServ: CreateComponentService) { }

  @ViewChild('replies_reply',{read:ViewContainerRef}) replies_reply!: ViewContainerRef;
  @Input() reply!: Reply;


  createComponentReply(username: any, commentId: number = 0) {
    this.createCompServ.createComponent(this.replies_reply,ReplyInputComponent, username, commentId);
  }

  ngOnInit(): void {
  }

}
