
export class ResponseTo {
        public commentId!: Number;  
        public replyId!:  Number;  

        constructor(commentId: Number, replyId: Number) {
                this.commentId = commentId;
                this.replyId = replyId;
        }
        
}
