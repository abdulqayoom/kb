import { Component, OnInit } from '@angular/core';
import { Observable, toArray, pluck } from 'rxjs';
import { shareservice } from './share.service';

@Component({
  selector: 'app-share-replay',
  templateUrl: './share-replay.component.html',
  styleUrls: ['./share-replay.component.css']
})
export class ShareReplayComponent implements OnInit {
  listItems: Array<string> = ['All', 'groceries', 'home-decoration', 'laptops', 'smartphones'];
  selectedValue: string = 'All';
  selectedProducts!: Observable<any>;
  products: any;
  data: any;
  pp = {};
  public source: Array<{ text: string; value: number }> = [
    { text: "Small", value: 1 },
    { text: "Medium", value: 2 },
    { text: "Large", value: 3 },
  ];

  public data1!: Array<{ text: string; value: number }>;

  constructor(private _sp: shareservice) {
    this.data1 = this.source.slice();

  }
  ngOnInit(): void {

    this._sp.getproducts().pipe(pluck('products'))

      .subscribe((data) => {
        this.products = data
        this.data = data;
      }
      )
  }

  handleFilter(value: any) {
    debugger
     this.data = this.products.filter(
       (s: { category: string; }) => s.category.toLowerCase().indexOf(value.toLowerCase()) !== -1
     );
    debugger
  }


}
