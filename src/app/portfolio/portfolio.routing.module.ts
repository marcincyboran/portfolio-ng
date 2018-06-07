import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PortfolioComponent } from './index';

const routes: Routes = [
  {
    path: 'portfolio',
    component: PortfolioComponent,
    data: { state: 'portfolio' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortfolioRoutingModule {}
