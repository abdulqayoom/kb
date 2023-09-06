import { Component, OnInit } from '@angular/core';
import { postService } from '../crud/Service/post.service';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {
  username: string = ''
  constructor(private _post: postService) { }
  ngOnInit(): void {
    this._post.username.subscribe(res => this.username = res)
  }
  changevalue(inp: any) {
    debugger
    this._post.username.next(inp.value)
  }
}
