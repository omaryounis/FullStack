import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AccountService } from '../_services/account.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor( private _accountService:AccountService,private _toastr:ToastrService) { 
    
  }
  canActivate(): Observable<boolean> {
    return this._accountService.currentUser$.pipe(
      map((user: any) => {
        if (user) {
          return true;
        }

        else
          {
            this._toastr.error('invalid request')
            return false;
          }
      })
    );
  }
  
}
