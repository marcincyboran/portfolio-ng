import { NgModule } from '@angular/core';
import { PortfolioComponent } from './index';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../_shared/shared.module';
import { PortfolioRoutingModule } from './portfolio.routing.module';

@NgModule({
  declarations: [
    PortfolioComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PortfolioRoutingModule
  ]
})
export class PortfolioModule {}
