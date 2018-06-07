import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../_interfaces/post';

@Injectable({
  providedIn: 'root'
})
export class HttpBlogService {

  readonly URL_DB = 'https://api.mlab.com/api/1/databases/portfolio_blog/collections/posts';
  readonly param = new HttpParams().set(
    'apiKey',
    'nZ4X3O7K8gYk47-neLjlvUwF4W56ReLg'
  );

  constructor(private http: HttpClient) {}

  getPosts(): Observable<Array<Post>> {
    return this.http.get<Array<Post>>(this.URL_DB, { params: this.param });
  }

  getPost(id: string): Observable<Post> {
    return this.http.get<Post>(this.URL_DB + '/' + id, { params: this.param});
  }

  sendPost(post: Post): void {
    this.http.post<Post>(this.URL_DB, post, { params: this.param }).subscribe(data => {});
  }

  deletePost(post: Post): void {
    const id = post._id.$oid;
    this.http.delete<Post>(this.URL_DB + '/' + id, { params: this.param }).subscribe(data => {});
  }
}
