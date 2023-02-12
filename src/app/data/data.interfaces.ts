import { FormControl } from '@angular/forms';

export interface InvoiceForm {
  name: FormControl<string>;
  quantity: FormControl<number>;
  price: FormControl<number>;
}

export interface Invoice {
  name: string;
  quantity: number;
  price: number;
}

export interface InvoiceState {
  loading: boolean;
  loaded: boolean;
  data: Invoice[];
}
