import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CompanyFrom } from 'src/app/invoiceData/invoiceData.interfaces';

@Component({
  selector: 'app-company-finder',
  templateUrl: './company-finder.component.html',
  styleUrls: ['./company-finder.component.scss'],
})
export class CompanyFinderComponent {
  formGroup = new FormGroup({
    taxNumber: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.pattern('^[0-9]*$')],
    }),
  });

  getNIP() {
    return this.formGroup.getRawValue();
  }

  onSubmit() {
    this.formGroup.markAllAsTouched();
    if (this.formGroup.invalid) {
      return;
    }

    console.log(this.getNIP());
  }
}
