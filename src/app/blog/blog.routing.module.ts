import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogComponent, PostComponent } from './index';

const routes: Routes = [
  {
    path: 'blog',
    component: BlogComponent,
    data: { state: 'blog' }
  },
  {
    path: 'post/:id',
    component: PostComponent,
    data: { state: 'post' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule {}
