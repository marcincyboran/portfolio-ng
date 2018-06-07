import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminPanelComponent, AddPostComponent, MessagesComponent, LoggerComponent } from './index';
import { AuthGuardService } from '../_services/auth-guard.service';

const routes: Routes = [
  {
    path: 'admin',
    component: AdminPanelComponent,
    data: { state: 'admin' },
    canActivate: [AuthGuardService],
    children: [
      {
        path: '',
        redirectTo: 'add',
        pathMatch: 'full'
      },
      {
        path: 'add',
        component: AddPostComponent
      },
      {
        path: 'messages',
        component: MessagesComponent
      },
      {
        path: 'logger',
        component: LoggerComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminPanelRoutingModule {}
