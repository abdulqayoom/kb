import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InputRoutingModule } from './input-routing.module';
import { InputComponent } from './input.component';

import { InputsModule } from '@progress/kendo-angular-inputs';
import { CheckboxComponent1 } from './checkbox/checkbox.component';
import { LabelModule } from '@progress/kendo-angular-label';
import { FormfieldsComponent } from './formfields/formfields.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DateInputsModule } from "@progress/kendo-angular-dateinputs";
import { SwitchComponent } from './switch/switch.component';
@NgModule({
  declarations: [
    InputComponent,
    CheckboxComponent1,
    FormfieldsComponent,
    SwitchComponent
  ],
  imports: [
    CommonModule,
    InputRoutingModule,
    InputsModule,
    LabelModule,
    ReactiveFormsModule,
    DateInputsModule,
    FormsModule
  ],
  exports: [InputComponent,
    CheckboxComponent1,
    FormfieldsComponent,
    SwitchComponent]
})
export class InputModule { }
