import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class shareservice {
  url = "https://dummyjson.com/products"
  constructor(private _http: HttpClient) { }

  getproducts() {
    debugger
    return this._http.get(this.url);
  }
}