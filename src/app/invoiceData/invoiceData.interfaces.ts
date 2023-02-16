import { FormControl } from '@angular/forms';

export interface InvoiceForm {
  name: FormControl<string>;
  quantity: FormControl<number>;
  price: FormControl<number>;
}

export interface InvoiceData {
  name: string;
  quantity: number;
  price: number;
}

export interface InvoiceState {
  data: InvoiceData[];
  loading: boolean;
  loaded: boolean;
  company: CompanyData | null;
}

export interface CompanyData {
  address: string;
  name: string;
  phones: string[];
}
