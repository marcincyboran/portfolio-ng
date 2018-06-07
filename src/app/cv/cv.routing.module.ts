import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CvComponent } from './index';

const routes: Routes = [
  {
    path: 'cv',
    component: CvComponent,
    data: { state: 'cv' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CvRoutingModule {}
