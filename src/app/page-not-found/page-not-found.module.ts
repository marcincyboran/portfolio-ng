

import { NgModule } from '@angular/core';
import { PageNotFoundComponent } from './index';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../_shared/shared.module';
import { PageNotFoundRoutingModule } from './page-not-found.routing.module';

@NgModule({
  declarations: [
    PageNotFoundComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PageNotFoundRoutingModule
  ]
})
export class PageNotFoundModule {}
