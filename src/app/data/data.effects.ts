import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { switchMap, map, catchError, of, Observable } from 'rxjs';
import { fetchData, fetchDataSuccess, fetchDataFailed } from './data.actions';
import { Invoice } from './data.interfaces';

@Injectable()
export class DataEffects {
  constructor(private actions$: Actions) {}
  fetchDatas$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fetchData),
      switchMap(() => this.fetchData()),
      map((data) => fetchDataSuccess({ data })),
      catchError(() => of(fetchDataFailed()))
    )
  );

  private fetchData(): Observable<Invoice[]> {}
}
