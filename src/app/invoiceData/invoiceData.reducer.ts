import {
  clearState,
  fetchCompanyData,
  fetchCompanyDataFailed,
  fetchCompanyDataSuccess,
  setInvoiceData,
} from './invoiceData.actions';
import { createReducer, on } from '@ngrx/store';
import { InvoiceState } from './invoiceData.interfaces';

export const initialState: InvoiceState = {
  data: [],
  loading: false,
  loaded: false,
  company: null,
};

export const invoiceDataReducer = createReducer(
  initialState,

  on(setInvoiceData, (state, { data }) => {
    return {
      ...state,
      data: data,
      loading: false,
      loaded: true,
    };
  }),
  on(fetchCompanyData, (state) => {
    return {
      ...state,
      loading: true,
      loaded: false,
    };
  }),

  on(fetchCompanyDataSuccess, (state, { data }) => {
    return {
      ...state,
      company: data,
      loading: false,
      loaded: true,
    };
  }),

  on(fetchCompanyDataFailed, (state) => {
    return {
      ...state,
      loading: false,
      loaded: false,
    };
  }),

  on(clearState, () => initialState)
);
