import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private auth: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

    if (this.auth.user && this.auth.user.email === 'admin@example.com') {
      // console.log('authGuard --- return true', this.auth.user);
      return true;
    }
    this.router.navigate(['/home']);
    return false;
  }
}
