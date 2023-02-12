import {
  clearState,
  fetchDataFailed,
  fetchDataSuccess,
  fetchData,
} from './data.actions';
import { createReducer, on } from '@ngrx/store';
import { InvoiceState } from './data.interfaces';

export const initialState: InvoiceState = {
  loading: false,
  loaded: false,
  data: [],
};

export const locationsReducer = createReducer(
  initialState,

  on(fetchData, (state) => {
    return {
      ...state,
      loading: true,
      loaded: false,
    };
  }),

  on(fetchDataSuccess, (state, { data }) => {
    return {
      ...state,
      data: data,
      loading: false,
      loaded: true,
    };
  }),

  on(fetchDataFailed, (state) => {
    return {
      ...state,
      loading: false,
      loaded: false,
    };
  }),

  on(clearState, () => initialState)
);
