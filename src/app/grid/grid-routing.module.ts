import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GridComponent } from './grid.component';
import { GridDataResultComponent } from './grid-data-result/grid-data-result.component';
import { FitergirdComponent } from './fitergird/fitergird.component';
import { ExportPDFComponent } from './export-pdf/export-pdf.component';

const routes: Routes = [{ path: '', component: GridComponent },
{ path: 'griddataresult', component: GridDataResultComponent },
{ path: 'filtergrid', component: FitergirdComponent },
{path: 'pdf', component: ExportPDFComponent },];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GridRoutingModule { }
