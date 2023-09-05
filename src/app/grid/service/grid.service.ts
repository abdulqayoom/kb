import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { UserData } from '../Model/GridModel';

@Injectable({
  providedIn: 'root'
})
export class GridService {

  constructor(private http: HttpClient) { }

  getUserList() {
    return this.http.get<UserData[]>('https://jsonplaceholder.typicode.com/users');
  }
}
