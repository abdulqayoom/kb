import { Component, OnInit } from '@angular/core';
import { Observable, Subscription, interval, map } from 'rxjs'

@Component({
  selector: 'app-mapop',
  templateUrl: './mapop.component.html',
  styleUrls: ['./mapop.component.css']
})
export class MapopComponent implements OnInit {
  obj!: Observable<any>;
  obj1: any;
  sub!: Subscription;
  ngOnInit(): void {
    const obs = interval(1000);

    this.sub = obs.pipe(
      map(data =>
        data + 'hello')
    ).subscribe(res => {
      this.obj1 = res
      console.log(res)
      setTimeout(() => {
        this.sub.unsubscribe()
      }, 3000);
    })
  }



}
