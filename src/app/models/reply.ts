import { User } from './user';

export interface Reply {
        id?: Number;  
        content?: String;  
        createdAt?: String;  
        score?: Number;  
        replyingTo?: String;
        user?: User;  
        
}
