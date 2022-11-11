import { createReducer, on } from '@ngrx/store';
import * as actions from '../actions/comment.actions';
import { ItemsState } from '../../models/itemSstate';
import { Reply } from '../../models/reply';


export const initialState: ItemsState = { comments: [] };

const _commentReducer = createReducer(
  initialState,
  on(actions.load, (state) => { //TODO:!
    return { ...state }
  }),
  on(actions.loadedItems, (state, { comments }) => { //TODO:!
    return { ...state, comments}
  }),
  on(actions.create, (state, { comment }) => { //TODO:!
    return { ...state, comments: [...state.comments,comment] }
  }),
  on(actions.createInputReply, (state, { username, commentId }) => { 
  
    let d = state.comments.map(comment => {
      if (commentId === comment.id) {
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