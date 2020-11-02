import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AccountService } from '../_services/account.service';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit {
  /**
   *
   */
  @Output() isRegistred=new EventEmitter();
  username:any;
  User=new User();

  constructor(private _accountService:AccountService,private _route:Router
  ) {
    
  }
  ngOnInit(): void {
  }
  register(){
    this._accountService.register(this.User).subscribe(response=>{
    //  console.log(response);
      this._route.navigateByUrl('/member-list'); 
      this.cancel();
    }
    );
  }
  cancel(){
    this.isRegistred.emit(false);
  }
}
export class User {
  constructor() {}
  username: string='';
  password: string='';
}
