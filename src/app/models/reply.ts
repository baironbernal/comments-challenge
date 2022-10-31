import { User } from './user';

export class Reply {
        public id!: Number;  
        public content!: String;  
        public createdAt!: String;  
        public score!: Number;  
        public replyingTo!: String;
        public user!: User;  

        constructor(content: String, replyingTo: String, score: Number) {
                this.content = content;
                this.id = Math.random();
                this.replyingTo = replyingTo;
                this.score = score;
        }
        
}
