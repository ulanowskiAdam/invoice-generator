import { DateService } from './../../date/date.service';
import { select, Store } from '@ngrx/store';
import {
  selectCompanyClientData,
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
  InvoiceCompany,
  InvoiceItem,
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
  dataSource = new MatTableDataSource<InvoiceItem>([]);
  companyData$: Observable<InvoiceCompany | null>;
  companyClientData$: Observable<InvoiceCompany | null>;
  today: string;
  futureDate: string;

  private destroy$ = new Subject<void>();

  constructor(
    private store: Store<{ invoiceData: InvoiceState }>,
    private dateService: DateService
  ) {
    this.companyData$ = this.store.select(selectCompanyData);
    this.companyClientData$ = this.store.select(selectCompanyClientData);
    this.today = this.dateService.getTodayDate();
    this.futureDate = this.dateService.futureDate();
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

  private countTotalPrice(invoiceItems: InvoiceItem[]): number {
    return invoiceItems.reduce((total: number, item: InvoiceItem) => {
      return total + item.quantity * item.price;
    }, 0);
  }
}
