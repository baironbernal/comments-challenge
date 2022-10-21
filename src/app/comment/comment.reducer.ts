import { createReducer, on } from '@ngrx/store';
import * as actions from './comment.actions';
import { informacion } from '../../assets/data';
import { Comment } from '../models/comment';

export const initialState: Comment[] = informacion.comments;

const _commentReducer = createReducer(
  initialState,
  on(actions.create, (state, {content}) => [...state, new Comment(content)]),
);



export function commentReducer (state: any, action: any) {
      return _commentReducer(state, action)
}