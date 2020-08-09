import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class StuentauthGuard implements CanActivate {
  constructor(private router:Router){}
  
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let login=localStorage.getItem('studentallow');
      if(login== 'true')
    {
     
      return true;
    }
    else
    {
      alert('not allow');
      this.router.navigate(['login']);
      return false;
    }
  }
  
}
