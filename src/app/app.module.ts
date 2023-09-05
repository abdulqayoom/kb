import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DropDownsModule, ComboBoxModule } from '@progress/kendo-angular-dropdowns';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'
import { GridModule } from '@progress/kendo-angular-grid';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { LabelModule } from '@progress/kendo-angular-label';
import { ReactiveFormsModule } from '@angular/forms'
import { LayoutModule } from '@progress/kendo-angular-layout';
import { NotificationModule } from '@progress/kendo-angular-notification';
import { BarcodesModule } from '@progress/kendo-angular-barcodes';











@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    DateInputsModule,
    ComboBoxModule,
    BrowserAnimationsModule,
    NgbModule,
    DropDownsModule,
    HttpClientModule,
    GridModule,
    ButtonsModule,
    InputsModule,
    LabelModule,
    ReactiveFormsModule,
    LayoutModule,
    NotificationModule,
    BarcodesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
