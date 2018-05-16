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
  constructor(private firebase: AngularFireAuth, private router: Router) {
    firebase.authState.subscribe(user => {
      this.user = user;
      console.log('authState.subscribe---------', this.user);
    });
  }

  login(email: string, pass: string): void {
    console.log('---login---');
    this.firebase.auth
      .signInWithEmailAndPassword(email, pass)
      .then(data => {
        console.log(data);
        this.goHome();
      })
      .catch(err => {
        console.log(err);
      });
  }

  register(email: string, pass: string): void {
    console.log('---reg---');
    this.firebase.auth
      .createUserWithEmailAndPassword(email, pass)
      .then(data => {
        console.log(data);
        this.goHome();
      })
      .catch(err => {
        console.log(err);
      });
  }

  logout(): void {
    console.log('---logout---');
    this.firebase.auth.signOut();
    this.goHome();
  }

  goHome(): void {
    this.router.navigate(['/home']);
  }

}
