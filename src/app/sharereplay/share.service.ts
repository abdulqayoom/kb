import { Injectable } from '@angular/core';
import { StringFilterComponent } from '@progress/kendo-angular-grid';
import { Subject, ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShareService {
  emittedstring = new ReplaySubject<string>(5)
  constructor() { }
}
