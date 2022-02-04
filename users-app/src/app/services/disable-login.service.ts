import { LocationStrategy } from '@angular/common';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class DisableLoginService implements CanActivate {

  constructor(
    private authService : AuthService,
    private locationStrategy : LocationStrategy) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    this.locationStrategy.onPopState(() => {
      history.pushState(null, null, location.href)
    })

    return !this.authService.isAuthenticated()
  }
}
