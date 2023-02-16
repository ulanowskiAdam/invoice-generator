import { invoiceDataReducer } from './invoiceData/invoiceData.reducer';

import { PreviewComponent } from './components/preview/preview.component';
import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './components/form/form.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { MaterialModule } from './material.module';
import { LayoutModule } from '@angular/cdk/layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { InvoiceStore } from './invoiceData/invoiceData.const';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { HttpClientModule } from '@angular/common/http';
import { InvoiceDataEffects } from './invoiceData/invoiceData.effects';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    NavigationComponent,
    PreviewComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    LayoutModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({
      [InvoiceStore]: invoiceDataReducer,
    }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    HttpClientModule,
    EffectsModule.forRoot(InvoiceDataEffects),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
