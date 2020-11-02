import { Component, OnInit } from '@angular/core';
import { AccountService } from '../_services/account.service';
import { Observable } from 'rxjs';
import { User } from '../_models/User';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {
  loginModel:any={};
  currentUser$:Observable<User>;
  constructor(private _accountService : AccountService,private _route:Router) { }

  ngOnInit(): void {
    this.currentUser$ = this._accountService.currentUser$;
  }

  login(){
          console.log(this._accountService.login(this.loginModel).subscribe(response=>
          {
            this._route.navigateByUrl('/member-list');
              console.log(response);
              
            
          },error=>{
              console.log(error);
            })
          )
  }

  logout(){
  
          this._accountService.logout();
          this._route.navigateByUrl('/')
          
  }
  // getCurrentUser(){
  //  this._accountService.currentUser$.subscribe(res=>{

  //     this.isLogged=!!res;
  //   },error=>{
  //     console.log('error');
  //   });
    
  // }
}
