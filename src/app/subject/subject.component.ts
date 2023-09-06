import { Component, OnInit } from '@angular/core';
import { postService } from '../crud/Service/post.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent  implements OnInit {
  constructor(private _post:postService){

  }
  ngOnInit(): void {
    this._post.username.subscribe((res)=>this.username=res)
  }
username:string="hafil"
}
