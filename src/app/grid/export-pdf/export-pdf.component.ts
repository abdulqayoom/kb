import { Component, OnInit } from '@angular/core';
import { UserData } from '../Model/GridModel';
import { GridService } from '../service/grid.service';

@Component({
  selector: 'app-export-pdf',
  templateUrl: './export-pdf.component.html',
  styleUrls: ['./export-pdf.component.css']
})
export class ExportPDFComponent implements OnInit {
  gridData: UserData[] = []
  constructor(private userservice: GridService) {

  }
  ngOnInit(): void {

    this.userservice.getUserList().subscribe((data: UserData[]) => {

      this.gridData = data
      console.log(this.gridData)
    })

  }
}
