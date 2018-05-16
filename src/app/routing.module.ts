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

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
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
  component: ContactComponent
},
{
  path: 'login',
  component: AdminPanelComponent
},
{
  path: 'admin',
  component: AdminPanelComponent
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
