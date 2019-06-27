import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  
  constructor(private route: ActivatedRoute) {}
  
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      return true;
      
      /*return new Promise<boolean>((resolve, reject) => {
        this.route.paramMap.subscribe((params: ParamMap) => {
          if(params.get('login').length > 1) {
            resolve(true);
          }
          resolve(false);
        });
      }*/
      

    
  }
  
  
}
