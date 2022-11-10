import { Comment } from './comment';

export interface ItemsState {
    loading: boolean,
    comments: ReadonlyArray<Comment>;
}