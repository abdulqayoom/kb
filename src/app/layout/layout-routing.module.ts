import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';

import { DrComponent } from './dr/dr.component';
import { StepperComponent1 } from './stepper/stepper.component';
import { TileLayoutComponent } from '@progress/kendo-angular-layout';
import { TLComponent } from './tl/tl.component';

const routes: Routes = [
  { path: '', component: LayoutComponent },
  { path: 'drawer', component: DrComponent },
  { path: 'stepper', component: StepperComponent1 },
  { path: 'tile', component: TLComponent },];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
