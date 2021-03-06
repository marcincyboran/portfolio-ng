import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Post } from '../../_interfaces/post';
import { HttpBlogService } from '../../_services/http-blog.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

  constructor(private http: HttpBlogService) {}

  ngOnInit() {}

  send(logForm: NgForm): void {
    let textShort = logForm.value.text.substr(0, 200);
    textShort = textShort.substr(0, Math.min(textShort.length, textShort.lastIndexOf(' '))) + '...';

    const post: Post = {
      title: logForm.value.title,
      text: logForm.value.text,
      text_short: textShort,
      img_url: logForm.value.img,
      created: new Date().getTime().toString()
    };

    this.http.sendPost(post);
    logForm.resetForm();
  }
}
