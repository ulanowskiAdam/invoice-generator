import { InvoiceStore } from './invoiceData.const';
import { createSelector, createFeatureSelector } from '@ngrx/store';
import { InvoiceState } from './invoiceData.interfaces';

export const selectInvoiceDataState =
  createFeatureSelector<InvoiceState>(InvoiceStore);

export const selectInvoiceData = createSelector(
  selectInvoiceDataState,
  (state) => state.data
);

export const selectCompanyData = createSelector(
  selectInvoiceDataState,
  (state) => state.company
);
