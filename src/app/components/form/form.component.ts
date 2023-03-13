import { SnackBarService } from '../../services/snackBar/snackBar';
import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

import {
  InvoiceItem,
  InvoiceForm,
  CompanyFrom,
  InvoiceCompany,
} from 'src/app/invoiceData/invoiceData.interfaces';
import { MatSnackBar } from '@angular/material/snack-bar';
import {
  setClientCompanyData,
  setInvoiceData,
} from 'src/app/invoiceData/invoiceData.actions';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  formArray = new FormArray<FormGroup<InvoiceForm>>([]);
  formGroup = new FormGroup<CompanyFrom>({
    name: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(3)],
    }),
    taxNumber: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.pattern('^[0-9]*$')],
    }),
    country: new FormControl('', {
      nonNullable: true,
      validators: [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(30),
        // Validators.pattern('/^[0-9]*$/'),
      ],
    }),
    city: new FormControl('', {
      nonNullable: true,
      validators: [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(30),
        // Validators.pattern('/^[0-9]*$/'),
      ],
    }),
    street: new FormControl('', {
      nonNullable: true,
      validators: [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(30),
      ],
    }),
    estate: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.maxLength(10)],
    }),
    apartment: new FormControl('', {
      nonNullable: true,
      validators: Validators.maxLength(10),
    }),
  });

  constructor(
    private router: Router,
    private store: Store,
    private snackBarService: SnackBarService
  ) {
    this.addNewItem();
  }

  ngOnInit(): void {}

  private getNewFormGroup() {
    return new FormGroup<InvoiceForm>({
      name: new FormControl('', {
        nonNullable: true,
        validators: [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(30),
        ],
      }),
      quantity: new FormControl(1, {
        nonNullable: true,
        validators: [
          Validators.required,
          Validators.min(1),
          Validators.max(100),
          Validators.pattern('^[0-9]*$'),
        ],
      }),
      price: new FormControl(0, {
        nonNullable: true,
        validators: [
          Validators.required,
          Validators.min(1),
          Validators.max(1000000),
          Validators.pattern('^[0-9]*$'),
        ],
      }),
    });
  }

  public addNewItem() {
    const newGroup = this.getNewFormGroup();
    this.formArray.push(newGroup);
  }

  public removeItem(index: number) {
    this.formArray.removeAt(index);
  }

  public getInvoiceValue(): InvoiceItem[] {
    return this.formArray.getRawValue();
  }

  public getClientValue(): InvoiceCompany {
    return this.formGroup.getRawValue();
  }

  public onSubmit() {
    if (this.formArray.length === 0) {
      this.snackBarService.openSnackBar('add item', 'Close');
      return;
    }
    this.formArray.markAllAsTouched();
    this.formGroup.markAllAsTouched();
    if (this.formArray.invalid || this.formGroup.invalid) {
      return;
    }

    console.log(this.getClientValue());

    this.store.dispatch(setClientCompanyData({ data: this.getClientValue() }));
    this.store.dispatch(setInvoiceData({ data: this.getInvoiceValue() }));
    this.router.navigate(['/preview']);
  }
}
