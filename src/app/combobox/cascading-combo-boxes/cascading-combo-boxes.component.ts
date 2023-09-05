import { Component } from '@angular/core';

@Component({
  selector: 'app-cascading-combo-boxes',
  templateUrl: './cascading-combo-boxes.component.html',
  styleUrls: ['./cascading-combo-boxes.component.css']
})
export class CascadingComboBoxesComponent {
  public isDisabledProducts = true;
  public isDisabledOrders = true;
  public selectedCategory = {};
  public selectedProduct = {};
  public selectedOrder = {};

  public dataCategory: Array<{ category: string; categoryId: number }> = [
    { category: "Beverages", categoryId: 1 },
    { category: "Condiments", categoryId: 2 },
    { category: "Seafood", categoryId: 3 },
  ];
  public dataProducts: Array<{
    productName: string;
    productId: number;
    categoryId: number;
  }> = [
      { productName: "Chai", productId: 1, categoryId: 1 },
      { productName: "Chang", productId: 2, categoryId: 1 },
      { productName: "Aniseed Syrup", productId: 3, categoryId: 2 },
      { productName: "Genen Shouyu", productId: 4, categoryId: 2 },
      { productName: "Ikura", productId: 5, categoryId: 3 },
      { productName: "Konbu", productId: 6, categoryId: 3 },
    ];
  public dataOrders: Array<{
    orderName: string;
    orderId: number;
    productId: number;
  }> = [
      { orderName: "Cunewalde", orderId: 1, productId: 1 },
      { orderName: "Albuquerque", orderId: 2, productId: 1 },
      { orderName: "Geneve", orderId: 3, productId: 2 },
      { orderName: "Graz", orderId: 4, productId: 2 },
      { orderName: "London", orderId: 5, productId: 3 },
      { orderName: "I. de Margarita", orderId: 6, productId: 3 },
      { orderName: "Barquisimeto", orderId: 7, productId: 4 },
      { orderName: "Brandenburg", orderId: 8, productId: 4 },
      { orderName: "Cunewalde", orderId: 9, productId: 5 },
      { orderName: "Mexico D.F.", orderId: 10, productId: 5 },
      { orderName: "Mexico D.F.", orderId: 11, productId: 6 },
      { orderName: "Rio de Janeiro", orderId: 12, productId: 6 },
    ];
  public dataResultProducts: Array<{
    productName: string;
    productId: number;
    categoryId: number;
  }> = [];

  public dataResultOrders: Array<{
    orderName: string;
    orderId: number;
    productId: number;
  }> = [];
  handleCategoryChange(value: any) {
    debugger
    this.selectedCategory = value;
    this.selectedProduct = {};
    this.selectedOrder = {};
    if (value == null) {
      this.isDisabledProducts = true
      this.dataResultProducts = [];
      this.dataOrders = [];


    }
    else {
      this.dataResultProducts = this.dataProducts.filter((s) => s.categoryId == value.categoryId)
      this.isDisabledProducts = false
    }
    this.isDisabledOrders = true;
    this.dataResultOrders = [];
  }
  handleProductChange(value: any) {
    debugger
    this.selectedProduct = value;
    this.selectedOrder = {};

    if (value === undefined) {
      this.isDisabledOrders = true;
      this.dataResultOrders = [];
    } else {
      this.isDisabledOrders = false;
      this.dataResultOrders = this.dataOrders.filter(
        (s) => s.productId === value.productId
      );
    }
  }

  handleOrderChange(value: any) {
    this.selectedOrder = value;
  }
}
