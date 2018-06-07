import { NgModule } from '@angular/core';
import { CvComponent } from './index';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../_shared/shared.module';
import { CvRoutingModule } from './cv.routing.module';

@NgModule({
  declarations: [
    CvComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CvRoutingModule
  ]
})
export class CvModule {}
