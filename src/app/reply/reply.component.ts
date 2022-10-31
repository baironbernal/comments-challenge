import { Component, OnInit, Input, ViewChild, ViewContainerRef } from '@angular/core';
import { Reply } from '../models/reply';


@Component({
  selector: 'app-reply',
  templateUrl: './reply.component.html',
  styleUrls: ['../shared/comments-styles.component.scss']
})
export class ReplyComponent implements OnInit {

  public newReply: any = '';
  constructor() { }

  @ViewChild('replies_reply',{read:ViewContainerRef}) replies_reply!: ViewContainerRef;
  @Input() reply!: Reply;


  createComponentReply(username: any, commentId: number = 0) {
    
  }

  ngOnInit(): void {
  }

}
