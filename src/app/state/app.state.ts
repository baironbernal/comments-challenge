import { ActionReducerMap } from '@ngrx/store';
import * as comments from './reducers/comment.reducer';
import { Comment } from '../models/comment';
import { ItemsState } from '../models/itemSstate';


export interface AppState {
   items: ItemsState;
}

export const appReducers: ActionReducerMap<AppState> = {
   items: comments.commentReducer,
   
}