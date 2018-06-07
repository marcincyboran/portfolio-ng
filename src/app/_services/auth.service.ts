import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import { User } from '@firebase/auth-types';
import { Observable, Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: User;
  admin: User;

  constructor(private firebase: AngularFireAuth, private router: Router) {
    firebase.authState.subscribe(user => {
      this.user = user;

      // Future feature - change this line because it's readable for all; for example make special prop in db that says user is admin
      user && user.email === 'admin@example.com' ? (this.admin = user) : (this.admin = null);
    });
  }

  login(email: string, pass: string): void {
    this.firebase.auth
      .signInWithEmailAndPassword(email, pass)
      .then(data => {
        this.goHome();
      })
      .catch(err => {
        console.error(err);
      });
  }

  register(email: string, pass: string): void {
    this.firebase.auth
      .createUserWithEmailAndPassword(email, pass)
      .then(data => {
        this.goHome();
      })
      .catch(err => {
        console.error(err);
      });
  }

  logout(): void {
    this.firebase.auth.signOut();
    this.goHome();
  }

  goHome(): void {
    this.router.navigate(['/home']);
  }
}
