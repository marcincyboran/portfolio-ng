import { NgModule } from '@angular/core';
import { SkillsComponent } from './index';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../_shared/shared.module';
import { SkillsRoutingModule } from './skills.routing.module';


@NgModule({
  declarations: [
    SkillsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    SkillsRoutingModule
  ]
})
export class SkillsModule {}
