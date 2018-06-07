import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private auth: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

    // Future feature - change this line because it's readable for all; for example make special prop in db that says user is admin
    if (this.auth.user && this.auth.user.email === 'admin@example.com') {
      return true;
    }
    this.router.navigate(['/home']);
    return false;
  }
}
