import { DataStore } from './data.const';

import { createSelector } from '@ngrx/store';
import { InvoiceState } from './data.interfaces';

export const locationState = (state: { [DataStore]: InvoiceState }) =>
  state.datas;

export const selectLoading = createSelector(
  locationState,
  (state: InvoiceState) => state.loading
);

export const selectLoaded = createSelector(
  locationState,
  (state: InvoiceState) => state.loaded
);

export const selectLocation = createSelector(
  locationState,
  (state: InvoiceState) => state.data
);
