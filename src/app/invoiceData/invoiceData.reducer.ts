import {
  clearState,
  fetchOurCompanyData,
  fetchOurCompanyDataFailed,
  fetchOurCompanyDataSuccess,
  setInvoiceData,
} from './invoiceData.actions';
import { createReducer, on } from '@ngrx/store';
import { InvoiceState } from './invoiceData.interfaces';

export const initialState: InvoiceState = {
  item: [],
  loading: false,
  loaded: false,
  company: null,
};

export const invoiceDataReducer = createReducer(
  initialState,

  on(setInvoiceData, (state, { data }) => {
    return {
      ...state,
      item: data,
      loading: false,
      loaded: true,
    };
  }),
  on(fetchOurCompanyData, (state) => {
    return {
      ...state,
      loading: true,
      loaded: false,
    };
  }),

  on(fetchOurCompanyDataSuccess, (state, { data }) => {
    return {
      ...state,
      company: data,
      loading: false,
      loaded: true,
    };
  }),

  on(fetchOurCompanyDataFailed, (state) => {
    return {
      ...state,
      loading: false,
      loaded: false,
    };
  }),

  on(clearState, () => initialState)
);
