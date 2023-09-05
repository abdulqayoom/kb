import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComboboxComponent } from './combobox.component';
import { CascadingComboBoxesComponent } from './cascading-combo-boxes/cascading-combo-boxes.component';
import { DisabledComboComponent } from './disabled-combo/disabled-combo.component';
import { CombotempletesComponent } from './combotempletes/combotempletes.component';

const routes: Routes = [
  { path: '', component: ComboboxComponent },
  { path: 'cccombo', component: CascadingComboBoxesComponent },
  { path: 'dcombo', component: DisabledComboComponent },
  
  { path: 'Tcombo', component: CombotempletesComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComboboxRoutingModule { }
