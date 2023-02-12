import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { InvoiceForm } from 'src/app/data/data.interfaces';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  public formGroup: FormGroup<InvoiceForm>;
  public items: FormGroup<InvoiceForm>[] = [];
  constructor(private router: Router) {
    this.addNewItem();
    this.formGroup = this.getFormGroup();
  }

  private getFormGroup() {
    return new FormGroup<InvoiceForm>({
      name: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required],
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
      price: new FormControl(1, {
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
    const newGroup = this.getFormGroup();
    this.items.push(newGroup);
  }

  public removeItem(index: number) {
    this.items.splice(index, 1);
  }

  public onSubmit() {
    const invoiceData = {
      items: this.items.map((item) => item.value),
    };

    this.router.navigate(['/preview']);
  }
}
