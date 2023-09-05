import { Component, OnInit } from '@angular/core';
import { CompositeFilterDescriptor } from "@progress/kendo-data-query";
import { filterBy, process } from "@progress/kendo-data-query";
import { UserData } from '../Model/GridModel';
import { GridService } from '../service/grid.service';

@Component({
  selector: 'app-fitergird',
  templateUrl: './fitergird.component.html',
  styleUrls: ['./fitergird.component.css']
})
export class FitergirdComponent implements OnInit {
  constructor(private userservice: GridService) {

  }
  ngOnInit(): void {
    this.loadData();
  }
  userData: UserData[] = []
  gridData: UserData[] = []
  public filter: CompositeFilterDescriptor = {
    logic: "and",
    filters: [],
  };
  loadData() {
    this.userservice.getUserList().subscribe((data: UserData[]) => {

      this.gridData = data
      debugger
      this.loadDatagrid()
    })

  }
  public filterChange(filter: CompositeFilterDescriptor): void {
    this.filter = filter;
    this.loadDatagrid();
  }
  public loadDatagrid(): void {
    this.userData = filterBy(this.gridData, this.filter);
    //this.gridData = process(sampleProducts, { filter: this.filter });
  }




}
