import { select, Store } from '@ngrx/store';
import {
  selectCompanyData,
  selectInvoiceData,
} from 'src/app/invoiceData/invoiceData.selectors';
import { Observable, Subject, takeUntil } from 'rxjs';
import {
  clearState,
  fetchCompanyData,
} from 'src/app/invoiceData/invoiceData.actions';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {
  CompanyData,
  InvoiceData,
  InvoiceState,
} from 'src/app/invoiceData/invoiceData.interfaces';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss'],
})
export class PreviewComponent implements OnInit, OnDestroy {
  totalPrice: number = 0;
  displayedColumns: string[] = ['name', 'quantity', 'price'];
  dataSource = new MatTableDataSource<InvoiceData>([]);
  private destroy$ = new Subject<void>();
  companyData$: Observable<CompanyData | null>;

  constructor(private store: Store<{ invoiceData: InvoiceState }>) {
    this.companyData$ = this.store.select(selectCompanyData);
  }

  ngOnInit(): void {
    this.store
      .pipe(takeUntil(this.destroy$), select(selectInvoiceData))
      .subscribe((data) => {
        this.dataSource.data = data;

        this.totalPrice = this.countTotalPrice(data);
      });

    this.store.dispatch(fetchCompanyData());
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
    this.store.dispatch(clearState());
  }

  private countTotalPrice(invoiceItems: InvoiceData[]): number {
    return invoiceItems.reduce((total: number, item: InvoiceData) => {
      return total + item.quantity * item.price;
    }, 0);
  }
}
