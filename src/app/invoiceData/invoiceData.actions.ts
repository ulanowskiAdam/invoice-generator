import { createAction, props } from '@ngrx/store';
import { CompanyData, InvoiceData } from './invoiceData.interfaces';

export const setInvoiceData = createAction(
  '[InvoiceData] Fetch InvoiceData Success',
  props<{ data: InvoiceData[] }>()
);

export const fetchCompanyData = createAction('[CompanyData] Fetch CompanyData');

export const fetchCompanyDataSuccess = createAction(
  '[CompanyData] Fetch CompanyData Success',
  props<{ data: CompanyData }>()
);

export const fetchCompanyDataFailed = createAction(
  '[CompanyData] Fetch CompanyData failed'
);

export const clearState = createAction('[Data] Clear State');
