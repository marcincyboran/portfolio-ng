import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Post } from '../../interfaces/post';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
  @Input() allPosts: Array<Post>;
  @Input() itemsOnPage: number;
  @Output() eventPage = new EventEmitter<number>();

  pages: Array<number>;
  currentPage = 1;

  constructor() {}

  ngOnInit() {
    let allPages = null;
    const fullPages = Math.floor((this.allPosts.length - 1) / this.itemsOnPage);
    const lastPage = (this.allPosts.length - 1) % this.itemsOnPage;
    lastPage === 0 ? (allPages = fullPages) : (allPages = fullPages + 1);

    this.pages = Array(allPages)
      .fill(0)
      .map((x, i) => i + 1);
  }

  changePage(page: number) {
    this.currentPage = page;
    this.eventPage.emit(page);
  }

  prev() {
    this.currentPage = this.currentPage - 1;
    this.eventPage.emit(this.currentPage);
  }

  next() {
    this.currentPage = this.currentPage + 1;
    this.eventPage.emit(this.currentPage);
  }
}
