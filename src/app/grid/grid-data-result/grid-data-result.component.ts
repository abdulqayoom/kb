import { AfterViewInit, Component, OnInit } from '@angular/core';
import { GridDataResult, PageChangeEvent } from "@progress/kendo-angular-grid";
import { UserData } from '../Model/GridModel';
import { GridService } from '../service/grid.service';

@Component({
  selector: 'app-grid-data-result',
  templateUrl: './grid-data-result.component.html',
  styleUrls: ['./grid-data-result.component.css']
})
export class GridDataResultComponent implements OnInit, AfterViewInit {
  public gridView!: GridDataResult;
  public pageSize = 5;
  public skip = 0;

  gridData: UserData[] = []
  constructor(private userservice: GridService) {
    debugger
    this.loadItems();

  }
  ngAfterViewInit(): void {
    debugger

  }
  ngOnInit(): void {

  }
  loadGridData() {
    this.gridView = {
      data: this.gridData.slice(this.skip, this.skip + this.pageSize),
      total: this.gridData.length,
    };
  }
  pageChange(event: PageChangeEvent): void {
    this.skip = event.skip;
    this.loadGridData();
  }
  loadItems() {
    this.userservice.getUserList().subscribe((data: UserData[]) => {

      this.gridData = data
      debugger
      this.loadGridData();
    }
    );
  }
}
