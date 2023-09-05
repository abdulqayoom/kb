import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonRoutingModule } from './button-routing.module';
import { ButtonComponent } from './button.component';
import { ButtonsModule } from "@progress/kendo-angular-buttons";

@NgModule({
  declarations: [
    ButtonComponent
  ],
  imports: [
    CommonModule,
    ButtonRoutingModule,
    ButtonsModule
  ]
})
export class ButtonModule { }
