import { createAction, props } from '@ngrx/store';
import { InvoiceCompany, InvoiceItem } from './invoiceData.interfaces';

export const setInvoiceData = createAction(
  '[InvoiceData] Fetch InvoiceData Success',
  props<{ data: InvoiceItem[] }>()
);

export const fetchOurCompanyData = createAction(
  '[CompanyData] Fetch Our Company Data'
);

export const fetchOurCompanyDataSuccess = createAction(
  '[CompanyData] Fetch Our Company Data Success',
  props<{ data: InvoiceCompany }>()
);

export const fetchOurCompanyDataFailed = createAction(
  '[CompanyData] Fetch Our Company Data failed'
);

export const clearState = createAction('[Data] Clear State');
