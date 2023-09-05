import { Component, OnInit } from '@angular/core';
import { GridService } from './service/grid.service';
import { UserData } from './Model/GridModel';
import { map, pipe } from 'rxjs';


@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {
  gridData: UserData[] = []
  constructor(private userservice: GridService) {

  }
  ngOnInit(): void {

    this.userservice.getUserList().subscribe((data:UserData[])=>{
     
      this.gridData=data
      console.log(this.gridData)
    })
    

  }


}
