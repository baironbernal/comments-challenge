import { createAction, props } from '@ngrx/store';
import { Comment } from '../models/comment';

export const create = createAction(
      'COMMENT Crear comentario',
      props<{ content: String }>()
);