import { User } from './user';
import { Reply } from './reply';
import { Image } from './image';

export class Comment {
        public id?: Number;  
        public content?: String;  
        public createdAt?: String;  
        public score?: Number;  
        public user!: User;  
        public replies?: Reply[]

        constructor(content?: String, username?: String, score?: Number) {
                this.id = Math.random();
                this.content = content;
                this.user = new User(new Image('assets/images/avatars/image-amyrobson.png', 'assets/images/avatars/image-amyrobson.webp'), username!);
                this.createdAt = '1 month ago';
                this.score = score;
                
        }
}
