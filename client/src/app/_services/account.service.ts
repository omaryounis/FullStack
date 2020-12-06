
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { User } from '../_models/User';
import { ReplaySubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AccountService {
  baseUrl:string='https://localhost:5001/api/';
///define userObservable
  private currentUserSource=new ReplaySubject<User>(1);
  currentUser$=this.currentUserSource.asObservable();

  constructor(private _http:HttpClient) { }

  login(model:any)
  {
    return this._http.post(this.baseUrl+'Account/login',model).pipe(
      map((response:User)=>{
        const user=response;
        if(user){
          localStorage.setItem("user",JSON.stringify(user));
          this.currentUserSource.next(user);
        }
      })
    );
  }

  register(model:any){
    return this._http.post(this.baseUrl+'Account/register',model).pipe(
      map((user:User)=>{
        if(user){
          localStorage.setItem('user',JSON.stringify(user));
          this.currentUserSource.next(user);
          return user;
        }
      })
    )
  }
  
  setCurrentUser(user:User){
    this.currentUserSource.next(user);
  }
  logout(){
    localStorage.removeItem('user');
    this.currentUserSource.next(null);
  }
}
