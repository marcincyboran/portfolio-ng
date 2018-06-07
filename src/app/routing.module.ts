import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { AdminPanelModule } from './admin-panel/admin-panel.module';
import { BlogModule } from './blog/blog.module';
import { ContactModule } from './contact/contact.module';
import { CvModule } from './cv/cv.module';
import { HomeModule } from './home/home.module';
import { LoginModule } from './login/login.module';
import { PortfolioModule } from './portfolio/portfolio.module';
import { SkillsModule } from './skills/skills.module';
import { PageNotFoundModule } from './page-not-found/page-not-found.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    AdminPanelModule,
    BlogModule,
    ContactModule,
    CvModule,
    HomeModule,
    LoginModule,
    PortfolioModule,
    SkillsModule,
    PageNotFoundModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class RoutingModule {}
