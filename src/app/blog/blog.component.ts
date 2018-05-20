import { Component, OnInit } from '@angular/core';
import { Post } from '../interfaces/post';
import { HttpBlogService } from '../http-blog.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  posts: Array<Post>;
  currentPost: Post;

  constructor(private http: HttpBlogService) {
    console.log('Admin-panel constructor');
  }

  ngOnInit() {
    this.http.getPosts().subscribe( data => {
      console.log('Admin ngOninit http get post');
      console.log(data);
      this.posts = data.reverse(); // First is newest in DB
      this.currentPost = data[0];
      console.log(this.currentPost);
    });
    console.log(this.posts);
  }

  send(logForm: NgForm): void {
    const post: Post = {
      title: logForm.value.title,
      text: logForm.value.text,
      img_url: logForm.value.img
    };
    console.log(post);
    this.http.sendPost(post);
  }
}
