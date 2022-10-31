import { createAction, props } from '@ngrx/store';
import { Comment } from '../models/comment';
import { Reply } from '../models/reply';

export const create = createAction(
      '[COMMENT] Crear comentario',
      props<{ comment: Comment }>()
);


export const createReplyOnComment = createAction(
      '[COMMENT] actualizar respuesta de un comentario',
      props<{ reply: Reply, commentId: Number}>()
);