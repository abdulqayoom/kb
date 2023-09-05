import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrudRoutingModule } from './crud-routing.module';
import { CrudComponent } from './crud.component';
import { HttpClientModule } from '@angular/common/http'
import { GridModule } from '@progress/kendo-angular-grid';
import { KendoGridEditFormComponent } from './kendo-grid-edit-form/kendo-grid-edit-form.component';
import { ReactiveFormsModule } from "@angular/forms";
import { DialogModule } from "@progress/kendo-angular-dialog";

import { InputsModule } from "@progress/kendo-angular-inputs";
import { LabelModule } from "@progress/kendo-angular-label";
import { ButtonsModule } from "@progress/kendo-angular-buttons";
import { DropDownsModule, ComboBoxModule } from '@progress/kendo-angular-dropdowns';
import { BarcodesModule } from '@progress/kendo-angular-barcodes';
@NgModule({
  declarations: [
    CrudComponent,
    KendoGridEditFormComponent
  ],
  imports: [
    CommonModule,
    CrudRoutingModule,
    HttpClientModule,
    GridModule,
    ReactiveFormsModule,
    InputsModule,
    LabelModule,
    DialogModule,
    ButtonsModule,
    ComboBoxModule,
    DropDownsModule,
    BarcodesModule
  ]
})
export class CrudModule { }
