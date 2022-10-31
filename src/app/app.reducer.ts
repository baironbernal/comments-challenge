import { ActionReducerMap } from '@ngrx/store';
import * as comments from './comment/comment.reducer';
import {  responseTo } from './comment/responseTo.reducer';
import { Comment } from './models/comment';
import { ResponseTo } from './models/responseTo';



export interface AppState {
   comments: Comment[],
   responseTo: ResponseTo
}


export const appReducers: ActionReducerMap<AppState> = {
   comments: comments.postsReducer,
   responseTo: responseTo
}