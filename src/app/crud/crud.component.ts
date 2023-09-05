
import { postService } from './Service/post.service'
import { Observable } from "rxjs";
import { Component, OnInit, Inject } from "@angular/core";
import { map } from "rxjs/operators";
import {
  GridDataResult,
  AddEvent,
  RemoveEvent,
} from "@progress/kendo-angular-grid";
import { State, process } from "@progress/kendo-data-query";
import { PostModel } from './Model/post';
import { post } from '../post/model/posts';
@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {
  public view!: Observable<GridDataResult>;
  public gridState: State = {
    sort: [],
    skip: 0,
    take: 10,
  };
  public editDataItem: PostModel | undefined;
  public isNew!: boolean;
  constructor(private _post: postService) {

  }
  viewmodel$ = this._post.getPosts();
  ngOnInit(): void {
    this.loaddata()
  }
  public addHandler(): void {
    this.editDataItem = {
      userId: 0,
      id: 0,
      title: '',
      body: ''
    };
    this.isNew = true;
  }
  public saveHandler(product: PostModel): void {
    this._post.savePost(product);
    this.editDataItem = undefined;
  }
  public editHandler(args: AddEvent): void {
    this.editDataItem = args.dataItem;
    this.isNew = false;
  }
  public onStateChange(state: State): void {
    this.gridState = state;
    // this.view = this._post.getPosts().pipe(
    //   map((data) => {
    //     return process(data, this.gridState)
    //   })
    // )
    //this.editService.read();
    this.loaddata();
  }

  loaddata() {
    this.view = this.viewmodel$.pipe(
      map((data) => {
        return process(data, this.gridState)
      })
    )
  }

  public removeHandler(args: RemoveEvent): void {
    debugger
    this._post.remove(args.dataItem['id'])
    this.editDataItem = undefined;
  }

}
