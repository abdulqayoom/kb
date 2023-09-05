import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';

import { LayoutModule } from '@progress/kendo-angular-layout';
import { DrawerComponent } from './drawer/drawer.component';
import { MyContentComponent } from './drawer/my-content/my-content.component';
import { DrComponent } from './dr/dr.component';
import { StepperComponent1 } from './stepper/stepper.component';
import { TilelayoutComponent1 } from './tilelayout/tilelayout.component';
import { InputModule } from '../input/input.module';
import { TLComponent } from './tl/tl.component';

@NgModule({
  declarations: [
    LayoutComponent,
    DrawerComponent,
    MyContentComponent,
    DrComponent,
    StepperComponent1,
    TilelayoutComponent1,
    TLComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    LayoutModule,
    InputModule
  ]
})
export class LayoutModule1 { }
