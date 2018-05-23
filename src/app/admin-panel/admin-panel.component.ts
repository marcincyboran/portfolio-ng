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

  constructor() {}

  ngOnInit() {}

}
