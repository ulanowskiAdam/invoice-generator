import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { CompanyService } from '../services/http/company.service';
import {
  fetchCompanyData,
  fetchCompanyDataFailed,
  fetchCompanyDataSuccess,
} from './invoiceData.actions';

@Injectable()
export class InvoiceDataEffects {
  constructor(
    private actions$: Actions,
    private companyService: CompanyService
  ) {}

  fetchCompanyData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fetchCompanyData),
      switchMap(() =>
        this.companyService.getCompanyData().pipe(
          map((companyData) => fetchCompanyDataSuccess({ data: companyData })),
          catchError(() => of(fetchCompanyDataFailed()))
        )
      )
    )
  );
}
