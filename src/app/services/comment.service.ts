import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { informacion } from 'src/assets/data';
import { ItemsState } from '../models/itemSstate';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  constructor() { }

  getDataApi(): Observable<ItemsState> {
    return of(informacion)
  }
}
