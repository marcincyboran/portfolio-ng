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
import { AuthGuardService } from './auth-guard.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
 {
   path: 'home',
   component: HomeComponent
 },
 {
  path: 'portfolio',
  component: PortfolioComponent
},
{
  path: 'blog',
  component: BlogComponent
},
{
  path: 'cv',
  component: CvComponent
},
{
  path: 'contact',
  component: ContactComponent
},
{
  path: 'skills',
  component: SkillsComponent
},
{
  path: 'login',
  component: LoginComponent
},
{
  // Work fine with routerLink, but direct url always return false, why...?
  path: 'admin',
  component: AdminPanelComponent,
  canActivate: [AuthGuardService]
},
{
  path: '**',
  component: PageNotFoundComponent,
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule {}
