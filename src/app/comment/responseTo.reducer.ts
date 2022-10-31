import { createReducer, on, State } from '@ngrx/store';
import { ResponseTo } from '../models/responseTo';

export const initialState: ResponseTo = {
      commentId: 0,
      replyId: 0
}

const _responseTo = createReducer(
  initialState, 
)

export function responseTo (state: any, action: any) {
      return _responseTo(state, action)
}