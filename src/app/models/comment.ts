import { User } from './user';
import { Reply } from './reply';

export class Comment {
        public id?: Number;  
        public content?: String;  
        public createdAt?: String;  
        public score?: Number;  
        public user?: User;  
        public replies?: Reply[]

        constructor(content: String) {
                this.id = Math.random();
                this.content = content;
                this.createdAt = '1 month ago';
                this.score = 1;
                
        }
}
