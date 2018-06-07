import { NgModule } from '@angular/core';
import { AdminPanelComponent, AddPostComponent, LoggerComponent, MessagesComponent } from './index';
import { CommonModule } from '@angular/common';
import { SortMessagesPipe } from '../_pipes/sort-messages.pipe';
import { FilterMessagesPipe } from '../_pipes/filter-messages.pipe';
import { AdminPanelRoutingModule } from './admin-panel.routing.module';
import { SharedModule } from '../_shared/shared.module';

@NgModule({
  declarations: [
    AdminPanelComponent,
    AddPostComponent,
    LoggerComponent,
    MessagesComponent,
    SortMessagesPipe,
    FilterMessagesPipe
  ],
  imports: [
    CommonModule,
    SharedModule,
    AdminPanelRoutingModule
  ]
})
export class AdminPanelModule {}
