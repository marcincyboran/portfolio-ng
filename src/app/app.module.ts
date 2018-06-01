import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RoutingModule } from './routing.module';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BlogComponent } from './blog/blog.component';
import { CvComponent } from './cv/cv.component';
import { ContactComponent } from './contact/contact.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { LoginComponent } from './login/login.component';
import { SkillsComponent } from './skills/skills.component';
import { AddPostComponent } from './admin-panel/add-post/add-post.component';
import { LoggerComponent } from './admin-panel/logger/logger.component';
import { PostComponent } from './blog/post/post.component';
import { PaginationComponent } from './blog/pagination/pagination.component';

import { LogerDirective } from './_directives/loger.directive';

// import { AgmCoreModule } from '@agm/core';
import { AuthService } from './_services/auth.service';
import { AuthGuardService } from './_services/auth-guard.service';
import { HttpBlogService } from './_services/http-blog.service';
import { MessagesComponent } from './admin-panel/messages/messages.component';
import { HttpContactService } from './_services/http-contact.service';
import { FilterMessagesPipe } from './_pipes/filter-messages.pipe';
import { SortMessagesPipe } from './_pipes/sort-messages.pipe';

const config = {
  apiKey: 'AIzaSyAn_qR1aVixNKss_DPUK8xG7nIMQreyRH4',
  authDomain: 'portfolio-auth.firebaseapp.com',
  databaseURL: 'https://portfolio-auth.firebaseio.com',
  projectId: 'portfolio-auth',
  storageBucket: 'portfolio-auth.appspot.com',
  messagingSenderId: '361518364748'
};

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    PortfolioComponent,
    PageNotFoundComponent,
    BlogComponent,
    CvComponent,
    ContactComponent,
    AdminPanelComponent,
    LoginComponent,
    SkillsComponent,
    AddPostComponent,
    LoggerComponent,
    PostComponent,
    PaginationComponent,
    MessagesComponent,
    LogerDirective,
    FilterMessagesPipe,
    SortMessagesPipe
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule,
    FormsModule,
    MatInputModule,
    HttpClientModule,
    ReactiveFormsModule
    // AgmCoreModule.forRoot({
    //   apiKey: 'AIzaSyAn_qR1aVixNKss_DPUK8xG7nIMQreyRH4'
    // }),
  ],
  providers: [AuthGuardService, AuthService, HttpBlogService, HttpContactService],
  bootstrap: [AppComponent]
})
export class AppModule {}
