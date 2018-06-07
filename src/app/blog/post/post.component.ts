import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Post } from '../../_interfaces/post';
import { HttpErrorResponse } from '@angular/common/http';
import { HttpBlogService } from '../../_services/http-blog.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  post: Post;
  isLoading = true;
  loadingError = false;
  constructor(private http: HttpBlogService, private route: ActivatedRoute) {}

  ngOnInit() {
    const postId = this.route.snapshot.paramMap.get('id');
    this.http.getPost(postId).subscribe(
      data => {
        this.post = data;
      },
      (error: HttpErrorResponse) => {
        console.error('Wild error appears', error);
        this.loadingError = true;
        this.isLoading = false;
      },
      () => {
        this.isLoading = false;
      }
    );
  }
}
