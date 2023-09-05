import { Component } from '@angular/core';

@Component({
  selector: 'app-disabled-combo',
  templateUrl: './disabled-combo.component.html',
  styleUrls: ['./disabled-combo.component.css']
})
export class DisabledComboComponent {
  public listItems: Array<{ text: string; value: number; inStock: boolean }> = [
    { text: "XS", value: 1, inStock: false },
    { text: "S", value: 2, inStock: true },
    { text: "M", value: 3, inStock: false },
    { text: "L", value: 4, inStock: true },
    { text: "XL", value: 5, inStock: false },
  ];
  public itemDisabled1(itemArgs: { dataItem: any; index: number }) {
    return !itemArgs.dataItem.inStock;
  }
}
