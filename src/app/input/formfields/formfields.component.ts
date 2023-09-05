import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup,FormBuilder, Validators} from '@angular/forms'
@Component({
  selector: 'app-formfields',
  templateUrl: './formfields.component.html',
  styleUrls: ['./formfields.component.css']
})
export class FormfieldsComponent implements OnInit {
  employeeform!:FormGroup;
  constructor(private fb:FormBuilder){

  }
  ngOnInit(): void {
    this.employeeform=this.fb.group({
      firstName: new FormControl(),
      lastName: new FormControl(),
      birthDate: new FormControl(new Date(2000, 10, 10)),
      email: new FormControl("", Validators.email),
      acceptNews: new FormControl(),


    })
  }
  public submitForm(): void {
    this.employeeform.markAllAsTouched();
  }

  public clearForm(): void {
    this.employeeform.reset();
  }


}
