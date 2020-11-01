import { Component, OnInit } from '@angular/core';
import { AccountService } from '../_services/account.service';
import { Observable } from 'rxjs';
import { User } from '../_models/User';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {
  loginModel:any={};
  currentUser$:Observable<User>;
  constructor(private _accountService : AccountService,private _route:Router
    ,private _toastr:ToastrService) { }

  ngOnInit(): void {
    this.currentUser$ = this._accountService.currentUser$;
  }

  login(){
          console.log(this._accountService.login(this.loginModel).subscribe(response=>
          {
            this._route.navigateByUrl('/member-list');
             
          this._toastr.success('login successful');
              
            
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
