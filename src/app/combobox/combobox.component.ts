import { Component } from '@angular/core';
interface item {
  text: string,
  value: number
}

@Component({
  selector: 'app-combobox',
  templateUrl: './combobox.component.html',
  styleUrls: ['./combobox.component.css']
})

export class ComboboxComponent {
  public data: Array<string> = []
  public Cdata: Array<item> = []
  constructor() {
    this.data = this.listItems.slice();
    this.Cdata = this.objectcombo.slice();

  }
  public selectedValue: string = "Baseball";
  combolist = ['primitive data', 'ComboBox to an array of objects', 'ComboBox to remote data by using a service.'];
  listItems: Array<string> = [
    "Baseball",
    "Basketball",
    "Cricket",
    "Field Hockey",
    "Football",
    "Table Tennis",
    "Tennis",
    "Volleyball",
  ];
  objectcombo: Array<item> = [
    { text: "Small", value: 1 },
    { text: "Medium", value: 2 },
    { text: "Large", value: 3 },]
  selectedItem = 3;

  handleFilter(value: string) {
    this.data = this.listItems.filter((s) => s.toLowerCase().indexOf(value.toLowerCase()) !== -1)
  }
  filtercombo(value: string) {
    debugger
    this.Cdata = this.objectcombo.filter((s) => s.text.toLowerCase().indexOf(value.toLowerCase()) !== -1)
  }
}
