import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { PostModel } from '../Model/post';
import { BehaviorSubject, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class postService {
  username = new BehaviorSubject<string>('initial value');

  constructor(private http: HttpClient) { }
  getPosts() {
    debugger
    return this.http.get<PostModel[]>('https://jsonplaceholder.typicode.com/posts')
  };
  getPostById(id: string) {
    return this.http.get<PostModel>(`'https://jsonplaceholder.typicode.com/posts/'${id}`)
  }
  savePost(post: PostModel) {
    debugger
    return this.http.post('https://jsonplaceholder.typicode.com/posts', post)
  }
  updatePost(post: PostModel, id: string) {
    return this.http.put(`'https://jsonplaceholder.typicode.com/posts/'${id}`, post)
  }
  remove(id: number) {
    debugger
    return this.http.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
  }
  getusers() {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

}
