import { Component, OnInit } from '@angular/core';
import { ShareService } from './share.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sharereplay',
  templateUrl: './sharereplay.component.html',
  styleUrls: ['./sharereplay.component.css']
})
export default class SharereplayComponent implements OnInit {
  userList1: string[] = ['a', 'b']
  userList2: string[] = ['a', 'b']
  userList3: string[] = ['a', 'b']
  user2sub: boolean = false;
  user3sub: boolean = false;
  userunsub3!: Subscription;
  constructor(private _rs: ShareService) {

  }
  ngOnInit(): void {
    this._rs.emittedstring.subscribe(res => this.userList1.push(res))
  }
  emittedvalue(data: string) {
    this._rs.emittedstring.next(data);
  }
  subs3() {

    if (this.user3sub) {
      this.userunsub3.unsubscribe();
    }
    else {
      this.userunsub3 = this._rs.emittedstring.subscribe(res => this.userList3.push(res))
    }
    this.user3sub = !this.user3sub;
  }

}
