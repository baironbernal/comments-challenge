import { createReducer, on, State } from '@ngrx/store';
import * as actions from './comment.actions';
import { informacion } from '../../assets/data';
import { Comment } from '../models/comment';


export const initialState: Comment[] = informacion.comments;

const _postsReducer = createReducer(
  initialState,
  on(actions.create, (state, {comment}) => {
    console.log(comment);
    return[...state, comment]
  }),
  on(actions.createReplyOnComment, (state, {reply, commentId }) => {
    console.log("Esta es la respuesta"+reply);
    return state.map<any>(comment => {
      if( comment.id === commentId) {
        
        let replies = comment.replies?.push(reply);
        console.log("Ingresa al comentario" + comment.id + "sus replies son" + replies)
        return {
          ...comment,
          replies: replies          
        }

      }
      return comment
    });
    
  }),
  
)

export function postsReducer (state: any, action: any) {
      return _postsReducer(state, action)
}