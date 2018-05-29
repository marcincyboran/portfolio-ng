import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BlogComponent } from './blog/blog.component';
import { CvComponent } from './cv/cv.component';
import { ContactComponent } from './contact/contact.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { SkillsComponent } from './skills/skills.component';
import { LoginComponent } from './login/login.component';
import { AddPostComponent } from './admin-panel/add-post/add-post.component';
import { LoggerComponent } from './admin-panel/logger/logger.component';
import { PostComponent } from './blog/post/post.component';

import { AuthGuardService } from './_services/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
    data: { state: 'home' }
  },
  {
    path: 'portfolio',
    component: PortfolioComponent,
    data: { state: 'portfolio' }
  },
  {
    path: 'blog',
    component: BlogComponent,
    data: { state: 'blog' }
  },
  {
    path: 'post/:id',
    component: PostComponent
  },
  {
    path: 'cv',
    component: CvComponent,
    data: { state: 'cv' }
  },
  {
    path: 'contact',
    component: ContactComponent,
    data: { state: 'contact' }
  },
  {
    path: 'skills',
    component: SkillsComponent,
    data: { state: 'skills' }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: { state: 'login' }
  },
  {
    // Work fine with routerLink, but direct url always return false, why...?
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
        path: 'logger',
        component: LoggerComponent
      }
    ]
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class RoutingModule {}
