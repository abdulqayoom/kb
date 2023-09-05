import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InputComponent } from './input.component';
import { CheckboxComponent1 } from './checkbox/checkbox.component';
import { FormfieldsComponent } from './formfields/formfields.component';


const routes: Routes = [{ path: '', component: InputComponent },
{ path: 'checkbox', component: CheckboxComponent1 },
{ path: 'form', component: FormfieldsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InputRoutingModule { }
