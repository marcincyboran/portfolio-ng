import { NgModule } from '@angular/core';
import { HomeComponent } from './index';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../_shared/shared.module';
import { HomeRoutingModule } from './home.routing.module';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    HomeRoutingModule
  ]
})
export class HomeModule {}
