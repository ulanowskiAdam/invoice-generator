import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
