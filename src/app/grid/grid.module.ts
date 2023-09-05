import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GridRoutingModule } from './grid-routing.module';
import { GridComponent } from './grid.component';
import { HttpClientModule } from '@angular/common/http'

import { GridModule, PDFModule } from '@progress/kendo-angular-grid';
import { GridDataResultComponent } from './grid-data-result/grid-data-result.component';
import { FitergirdComponent } from './fitergird/fitergird.component';
import { ExportPDFComponent } from './export-pdf/export-pdf.component';
@NgModule({
  declarations: [
    GridComponent,
    GridDataResultComponent,
    FitergirdComponent,
    ExportPDFComponent
  ],
  imports: [
    CommonModule,
    GridRoutingModule,
    HttpClientModule,
    GridModule,
    PDFModule
  ]
})
export class GridModule1 { }
