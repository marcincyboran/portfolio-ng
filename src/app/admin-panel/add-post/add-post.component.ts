import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpBlogService } from '../../http-blog.service';
import { Post } from '../../interfaces/post';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {
  posts: Array<Post>;

  constructor(private http: HttpBlogService) {}

  ngOnInit() {
    this.http.getPosts().subscribe(data => {
      console.log('Admin ngOninit http get post');
      console.log(data);
      this.posts = data.reverse(); // First is newest in DB
    });
    console.log(this.posts);
  }

  send(logForm: NgForm): void {
    let textShort = logForm.value.text.substr(0, 200);
    textShort =
      textShort.substr(0, Math.min(textShort.length, textShort.lastIndexOf(' '))) + '...';

    const post: Post = {
      title: logForm.value.title,
      text: logForm.value.text,
      text_short: textShort,
      img_url: logForm.value.img,
      created: new Date().toLocaleDateString()
    };

    console.log(post);
    this.http.sendPost(post);
    logForm.resetForm();
  }
}
