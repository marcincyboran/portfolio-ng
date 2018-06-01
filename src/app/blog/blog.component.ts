import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Post } from '../interfaces/post';
import { NgForm } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';
import { HttpBlogService } from '../_services/http-blog.service';

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
        // console.log('Blog ngOninit get post subscribe', data);

        // I'm sorting it here because of posts[0] in template
        this.posts = data.sort((a, b) => {
          const aTime = parseInt(a.created, 10);
          const bTime = parseInt(b.created, 10);
          if (aTime < bTime) {
            return 1;
          } else {
            return -1;
          }
        });
      },
      (error: HttpErrorResponse) => {
        console.error('Wild error appears', error);
        this.loadingError = true;
        this.isLoading = false;
      },
      () => {
        // console.log('completed');
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
