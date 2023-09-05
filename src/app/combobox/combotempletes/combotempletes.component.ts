import { Component } from '@angular/core';

@Component({
  selector: 'app-combotempletes',
  templateUrl: './combotempletes.component.html',
  styleUrls: ['./combotempletes.component.css']
})
export class CombotempletesComponent {
  public listItems: Array<{ text: string; value: number }> = [
    { text: "Small", value: 1 },
    { text: "Medium", value: 2 },
    { text: "Large", value: 3 },
  ];

  public selectedValue = 2;
}
