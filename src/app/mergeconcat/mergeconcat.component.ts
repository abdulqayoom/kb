import { Component, OnInit } from '@angular/core';
import { interval, map, take, toArray, concat,merge } from 'rxjs';

@Component({
  selector: 'app-mergeconcat',
  templateUrl: './mergeconcat.component.html',
  styleUrls: ['./mergeconcat.component.css']
})
export class MergeconcatComponent implements OnInit {

  user: any;
  user1: any;

  ngOnInit(): void {
    const user1 = interval(500).pipe(
      take(5),
      map(res => 'user' + res)
    )
    const user2 = interval(1000).pipe(
      take(5),
      map(res => 'user' + res)
    )
    const finaluser = concat(user1, user2);
    const finaluser1 = merge(user1, user2);
    finaluser.pipe(
      toArray()
    ).subscribe((res) => this.user = res);
    finaluser1.pipe(
      toArray()
    ).subscribe((res) => this.user1 = res)
  }

}
