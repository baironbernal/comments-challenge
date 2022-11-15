import { Component, OnInit, Input } from '@angular/core';
import { Reply } from '../models/reply';

@Component({
  selector: 'app-reply',
  templateUrl: './reply.component.html',
  styleUrls: ['../shared/comments-styles.component.scss']
})
export class ReplyComponent implements OnInit {

  public newReply: any = '';
  constructor() { }
  
  @Input() reply!: Reply;
  @Input() commentId!: number;

  answerReply() {
    console.log(this.reply, this.commentId)
  }

  ngOnInit(): void {
  }

}
