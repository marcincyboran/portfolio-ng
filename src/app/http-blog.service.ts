import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { Post } from './interfaces/post';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpBlogService {
  readonly URL_DB = 'https://api.mlab.com/api/1/databases/portfolio_blog/collections/posts';
  readonly param = new HttpParams().set(
    'apiKey',
    '3jyBlNhlN2LoIgTlqc4Bx-D6AHwO5sV1'
  );

  constructor(private http: HttpClient) {
    this.getPosts();
    console.log('Jestem');
  }

  getPosts(): Observable<Array<Post>> {
    return this.http.get<Array<Post>>(this.URL_DB, { params: this.param });
  }

  sendPost(post: Post): void {
    this.http.put(this.URL_DB, post, { params: this.param }).subscribe(data => {
      console.log(data);
    });
  }
}
