import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

import {
  InvoiceData,
  InvoiceForm,
} from 'src/app/invoiceData/invoiceData.interfaces';
import { MatSnackBar } from '@angular/material/snack-bar';
import { setInvoiceData } from 'src/app/invoiceData/invoiceData.actions';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  public formArray = new FormArray<FormGroup<InvoiceForm>>([]);
  constructor(
    private router: Router,
    private store: Store,
    private snackBar: MatSnackBar
  ) {
    this.addNewItem();
  }

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

  public getFormValue(): InvoiceData[] {
    return this.formArray.getRawValue();
  }

  public onSubmit() {
    if (this.formArray.length === 0) {
      this.snackBar.open('add item', 'Close', {
        duration: 3000,
      });
      return;
    }
    this.formArray.markAllAsTouched();
    if (this.formArray.invalid) {
      return;
    }

    this.store.dispatch(setInvoiceData({ data: this.getFormValue() }));
    this.router.navigate(['/preview']);
  }
}
