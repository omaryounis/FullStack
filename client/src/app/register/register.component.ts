import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AccountService } from '../_services/account.service';
import { Router } from '@angular/router';
import { ToastContainerDirective, ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  /**
   *
   */
  @Output() isRegistred=new EventEmitter();
  username:any;
  User=new User();

  constructor(private _accountService:AccountService,private _route:Router,
    private toastrService: ToastrService
  ) {
    
  }
  ngOnInit(): void {
  }
  register(){
    this._accountService.register(this.User).subscribe(response=>{
    //  console.log(response);
      this._route.navigateByUrl('/member-list');
      this.toastrService.success('registred successfull');
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
