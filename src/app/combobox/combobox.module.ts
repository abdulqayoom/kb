import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComboboxRoutingModule } from './combobox-routing.module';
import { ComboboxComponent } from './combobox.component';
import { DropDownsModule, ComboBoxModule } from '@progress/kendo-angular-dropdowns';
import { InputsModule } from "@progress/kendo-angular-inputs";
import { FormsModule } from '@angular/forms';
import { CascadingComboBoxesComponent } from './cascading-combo-boxes/cascading-combo-boxes.component';
import { DisabledComboComponent } from './disabled-combo/disabled-combo.component';
import { CombotempletesComponent } from './combotempletes/combotempletes.component'
@NgModule({
  declarations: [
    ComboboxComponent,
    CascadingComboBoxesComponent,
    DisabledComboComponent,
    CombotempletesComponent
  ],
  imports: [
    CommonModule,
    ComboboxRoutingModule,
    ComboBoxModule,
    InputsModule,
    FormsModule,
    DropDownsModule
  ]
})
export class ComboboxModule { }
