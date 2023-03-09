import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InvoiceCompany } from '../invoiceData/invoiceData.interfaces';

@Injectable({
  providedIn: 'root',
})
export class CompanyService {
  constructor(private http: HttpClient) {}

  getCompanyData(): Observable<InvoiceCompany> {
    return this.http.get<InvoiceCompany>('../../assets/company.json');
  }
}
