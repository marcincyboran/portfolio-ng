import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Post } from '../interfaces/post';
import { HttpBlogService } from '../http-blog.service';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  // @ViewChild('loading') loading: ElementRef;
  posts: Array<Post>;
  isLoading = true;
  loadingError = false;
  page = 1;
  itemsOnPage = 3;

  constructor(
    public auth: AuthService,
    private http: HttpBlogService,
    private router: Router
  ) {}

  ngOnInit() {
    this.http.getPosts().subscribe(
      data => {
        console.log('Blog ngOninit get post subscribe', data);
        this.posts = data.reverse(); // First is newest in DB??
      },
      (error: HttpErrorResponse) => {
        console.log('Wild error appears', error);
        this.loadingError = true;
        this.isLoading = false;
      },
      () => {
        console.log('completed');
        this.isLoading = false;
      }
    );
  }

  showPost(post: Post): void {
    this.router.navigate(['/post', post._id.$oid]);
  }

  deletePost(post: Post): void {
    this.http.deletePost(post);
    this.router.navigate(['home']);
  }

  currentPage(currentPage: number): void  {
    this.page = currentPage;
  }
}
