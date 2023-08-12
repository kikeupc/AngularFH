import { Injectable, inject } from '@angular/core';
import { CanActivateFn, CanMatchFn, Router, UrlTree } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Observable, take, tap } from 'rxjs';


@Injectable({ providedIn: 'root' })
export class AuthGuard {
    constructor() { }
    
}

export const authGuard: CanActivateFn = ( route, state) => {
  return true;
};

const isAuthenticated = (): | boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> => {
    const authService = inject(AuthService);
    const router = inject(Router);    
    return authService.checkAuthentication().pipe(
        
        take(1),
        tap( isAuthenticated => console.log("Is authenticated: ", isAuthenticated)),
        tap((isAuthenticated: boolean) => {
            if (!isAuthenticated) {
                router.navigate(['./auth/login']);
            }
        }),       
    );
  }


export const canActivateGuard:CanActivateFn = isAuthenticated;
export const canMatchGuard:CanMatchFn = isAuthenticated;