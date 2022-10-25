import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CreateComponentService {
  
  newReply: any = '';

  constructor() {}
  
  createComponent(container: any, component: any, username: any = null, commentId: number = 0) {
    if(!this.newReply) {
      this.newReply = container.createComponent(component);
      this.newReply.instance.valueInput = "@" + username;
      this.newReply.instance.commentId = commentId;
      console.log(this.newReply, "commentId" +  commentId);
      return this.newReply;
    }
    return this.newReply = '';
  }
}
