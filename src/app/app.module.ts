import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RoutingModule } from './routing.module';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';

import { LogerDirective } from './_directives/loger.directive';

import { AuthService } from './_services/auth.service';
import { AuthGuardService } from './_services/auth-guard.service';
import { HttpBlogService } from './_services/http-blog.service';
import { HttpContactService } from './_services/http-contact.service';
import { SharedModule } from './_shared/shared.module';


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
    LogerDirective
  ],
  imports: [
    SharedModule,
    BrowserModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule,
    HttpClientModule,
    RoutingModule
  ],
  providers: [AuthGuardService, AuthService, HttpBlogService, HttpContactService],
  bootstrap: [AppComponent]
})
export class AppModule {}
