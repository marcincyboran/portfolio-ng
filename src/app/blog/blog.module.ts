import { NgModule } from '@angular/core';
import { BlogComponent, PaginationComponent, PostComponent } from './index';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../_shared/shared.module';
import { BlogRoutingModule } from './blog.routing.module';

@NgModule({
  declarations: [
    BlogComponent,
    PaginationComponent,
    PostComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    BlogRoutingModule
  ]
})
export class BlogModule {}
