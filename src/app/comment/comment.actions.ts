import { createAction, props } from '@ngrx/store';
import { Comment } from '../models/comment';
import { Reply } from '../models/reply';

export const create = createAction(
      'COMMENT Crear comentario',
      props<{ comment: Comment }>()
);


export const createReply = createAction(
      'COMMENT Crear respuesta a comentario',
      props<{ reply: Reply }>()
);