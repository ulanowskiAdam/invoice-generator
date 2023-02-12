import { createAction, props } from '@ngrx/store/src';
import { Invoice } from './data.interfaces';

export const fetchData = createAction('[data] Store');

export const fetchDataSuccess = createAction(
  '[Data] Fetch Data Success',
  props<{ data: Invoice[] }>()
);

export const fetchDataFailed = createAction('[Data] Fetch Data failed');

export const clearState = createAction('[Data] Clear State');
