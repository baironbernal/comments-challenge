import { createReducer, on } from '@ngrx/store';
import * as actions from '../actions/comment.actions';
import { ItemsState } from '../../models/itemSstate';

export const initialState: ItemsState = { loading: false, comments: [] };

const _commentReducer = createReducer(
  initialState,
 

  on(actions.load, (state) => { //TODO:!
    return { ...state, loading: true }
  }),
  on(actions.loadedItems, (state, { comments }) => { //TODO:!
    return { ...state, loading: false, comments }
  })
);

export function commentReducer (state: any, action: any) {
      return _commentReducer(state, action)
}