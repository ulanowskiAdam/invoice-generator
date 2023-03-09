import { createAction, props } from '@ngrx/store';
import { InvoiceCompany, InvoiceItem } from './invoiceData.interfaces';

export const setInvoiceData = createAction(
  '[InvoiceData] set Invoice Data',
  props<{ data: InvoiceItem[] }>()
);

export const setClientCompanyData = createAction(
  '[ClientCompanyData] set client Data',
  props<{ data: InvoiceCompany }>()
);

export const fetchCompanyData = createAction(
  '[CompanyData] Fetch Company Data'
);

export const fetchCompanyDataSuccess = createAction(
  '[CompanyData] Fetch Company Data Success',
  props<{ data: InvoiceCompany }>()
);

export const fetchCompanyDataFailed = createAction(
  '[CompanyData] Fetch Company Data failed'
);

export const clearState = createAction('[Data] Clear State');
