import { User } from './user';
import { Reply } from './reply';

export interface Comment {
        id?: Number;  
        content?: String;  
        createdAt?: String;  
        score?: Number;  
        user?: User;  
        replies?: Reply[]
}
