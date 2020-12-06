import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { NavigationExtras, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(private _route:Router , private _toast:ToastrService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
   
    return next.handle(request).pipe(

      catchError(error =>
        {
          if(error){
            switch(error.status)
            {
                case 400:
                  if(error.error.errors){
                    const modelStateErrors=[];
                    for(const key in error.errror.errors){
                      if(error.error.errors[key]){
                        modelStateErrors.push(error.error.errors[key]);
                      }
                    }
                      throw modelStateErrors;
                  }else{
                    this._toast.error(error.statusText,error.status);
                  }
                  break;
                case 401:
                  this._toast.error(error.statusText,error.status);
                  break;
                case 404:
                  this._route.navigateByUrl('/not-found');
                case 500:
                  const navigrationExtras:NavigationExtras ={state:{error:error.error}};
                  this._route.navigateByUrl('/server-error',navigrationExtras);
                break;
                default:
                 // this._toast.error('Unexpected error');
                  //console.log(error.error);
                  break;
                }
            }   
        }
      ))
  }
}
