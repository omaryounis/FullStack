import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
 
  isRegister:boolean=false;
  
  constructor(private _accountService:AccountService) { 
  }
  ngOnInit(): void {
    
  }
  register(){
    this.isRegister=true;
  }
  cancel(){
    this.isRegister=false;
  }

  
  cancelRegister(){
    this.isRegister=false;
  }
 
}
