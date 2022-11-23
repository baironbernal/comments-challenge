import { createReducer, on } from '@ngrx/store';
import * as actions from '../actions/comment.actions';
import { ItemsState } from '../../models/itemSstate';
import { Reply } from '../../models/reply';


export const initialState: ItemsState = { comments: [] };

const _commentReducer = createReducer(
  initialState,
  on(actions.load, (state) => { return { ...state } }),
  on(actions.loadedItems, (state, { comments }) => { return { ...state, comments} }),
  on(actions.plusOrLess, (state, {commentId, operation}) => {
    let d = state.comments.map(comment => {
      if (commentId === comment.id ) {
        return {
          ...comment,
          score: comment.score + operation 
        }
      }
      return comment;
    })
    return {...state, comments: d}
  }),

  on(actions.create, (state, { comment, concept }) => {
    
    switch (concept) {
      case "reply":
        
        break;
    
      default:
        break;
    }
    return { ...state, comments: [...state.comments,comment] }
  }),
  on(actions.createInputReply, (state, { username, commentId }) => { 
    let d = state.comments.map(comment => {      
      if (commentId === comment.id && !comment.replies?.filter(item => item.id === 0).length) {
        return {
          ...comment,
          replies: [new Reply(0,username,1), ...comment.replies!],
        }
      }
      return comment;      
    }); 

    return {...state, comments: d}
    
  }),
);

export function commentReducer (state: any, action: any) {
      return _commentReducer(state, action)
}