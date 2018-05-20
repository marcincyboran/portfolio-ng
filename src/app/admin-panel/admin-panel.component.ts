import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpBlogService } from '../http-blog.service';
import { Post } from '../interfaces/post';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {

  posts: Array<Post>;

  constructor(private http: HttpBlogService) {
    console.log('Admin-panel constructor');
  }

  ngOnInit() {
    this.http.getPosts().subscribe( data => {
      console.log('Admin ngOninit http get post');
      console.log(data);
      this.posts = data.reverse(); // First is newest in DB
    });
    console.log(this.posts);
  }

  send(logForm: NgForm): void {
    const post: Post = {
      title: logForm.value.title,
      text: logForm.value.text,
      img_url: logForm.value.img,
      created: new Date().toLocaleDateString()
    };
    console.log(post);
    this.http.sendPost(post);
  }

}
