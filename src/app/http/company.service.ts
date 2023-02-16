import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CompanyData } from '../invoiceData/invoiceData.interfaces';

@Injectable({
  providedIn: 'root',
})
export class CompanyService {
  constructor(private http: HttpClient) {}

  getCompanyData(): Observable<CompanyData> {
    return this.http.get<CompanyData>('../../assets/company.json');
  }
}
