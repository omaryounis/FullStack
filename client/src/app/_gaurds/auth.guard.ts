import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AccountService } from '../_services/account.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  /**
   *
   */
  constructor( private _accountService:AccountService) { 
    
  }
  canActivate(): any {
    
    this._accountService.currentUser$.pipe(
      map((user:any)=>{
        if(user)
          return true;
          else
          alert('ivalid reques');
          return false;
      })
    )
  }
  
}
