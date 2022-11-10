import { createReducer, on } from '@ngrx/store';
import * as actions from '../actions/comment.actions';
import { ItemsState } from '../../models/itemSstate';

export const initialState: ItemsState = { comments: [] };

const _commentReducer = createReducer(
  initialState,
  on(actions.load, (state) => { //TODO:!
    return { ...state }
  }),
  on(actions.loadedItems, (state, { comments }) => { //TODO:!
    return { 
      ...state, 
      comments
    }
  })
);

export function commentReducer (state: any, action: any) {
      return _commentReducer(state, action)
}