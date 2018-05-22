import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpBlogService } from '../../http-blog.service';
import { Post } from '../../interfaces/post';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  post: Post;

  constructor(private http: HttpBlogService, private route: ActivatedRoute) {}

  ngOnInit() {
    const postId = this.route.snapshot.paramMap.get('id');
    this.http.getPost(postId).subscribe(
      data => {
        console.log('Post ngOninit get post subscribe', data);
        this.post = data;
      },
      (error: HttpErrorResponse) => {
        console.log('Wild error appears', error);
      },
      () => {
        console.log('completed');
      }
    );
  }
}
