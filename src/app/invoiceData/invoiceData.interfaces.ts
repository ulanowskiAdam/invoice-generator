import { FormControl } from '@angular/forms';

export interface InvoiceForm {
  name: FormControl<string>;
  quantity: FormControl<number>;
  price: FormControl<number>;
}

export interface InvoiceItem {
  name: string;
  quantity: number;
  price: number;
}

export interface InvoiceCompany {
  name: string;
  taxNumber: string;
  country: string;
  city: string;
  street: string;
  estate: string;
  apartment: string;
  phones?: string[];
}

export interface CompanyFrom {
  name: FormControl<string>;
  taxNumber: FormControl<string>;
  country: FormControl<string>;
  city: FormControl<string>;
  street: FormControl<string>;
  estate: FormControl<string>;
  apartment: FormControl<string>;
}

export interface InvoiceState {
  item: InvoiceItem[];
  loading: boolean;
  loaded: boolean;
  company: InvoiceCompany | null;
  clientCompany: InvoiceCompany | null;
}
