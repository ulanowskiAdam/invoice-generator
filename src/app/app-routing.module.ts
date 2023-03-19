import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyFinderComponent } from './components/company-browser/company-finder.component';
import { FormComponent } from './components/form/form.component';
import { PreviewComponent } from './components/preview/preview.component';

const routes: Routes = [
  {
    path: '',
    component: FormComponent,
  },
  {
    path: 'preview',
    component: PreviewComponent,
  },
  {
    path: 'finder',
    component: CompanyFinderComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
