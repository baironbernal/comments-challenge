import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects'; //TODO <---
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { CommentService } from '../../services/comment.service';

@Injectable()
export class ItemsEffects {

    loadItems$ = createEffect(() => this.actions$.pipe(
        ofType('COMMENT Cargados comentarios'),
        mergeMap(() => this.CommentService.getDataApi()//TODO Retorna la data [...]
            .pipe(
                map(items => ({ type: 'COMMENT Crear comentario', items })),
                catchError(() => EMPTY)
            ))
    )
    );

    constructor(
        private actions$: Actions,
        private CommentService: CommentService
    ) { }
}