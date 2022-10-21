import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CreateComponentService {
  
  newReply: any = '';

  constructor() {}
  
  createComponent(container: any, component: any) {
    if(!this.newReply) {
      this.newReply = container.createComponent(component);
    }
    return false;
  }
}
