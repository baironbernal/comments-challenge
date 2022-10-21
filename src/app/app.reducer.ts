import { ActionReducerMap } from '@ngrx/store';
import * as comments from './comment/comment.reducer';
import { Comment } from './models/comment';


export interface AppState {
   comments: Comment[],
}


export const appReducers: ActionReducerMap<AppState> = {
   comments: comments.commentReducer,
   
}