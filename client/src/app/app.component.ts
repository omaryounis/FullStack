import { Component, OnInit } from '@angular/core';
import { User } from './_models/User';
import { AccountService } from './_services/account.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html' 
})
export class AppComponent implements OnInit {
  title = 'Dating App';
  users:any;
  constructor(private _accountService:AccountService) {
  }
  ngOnInit(): void {
    this.setCurrentUser();
  }
  
  setCurrentUser(){
    const user:User = JSON.parse(localStorage.getItem('user'));
    this._accountService.setCurrentUser(user);
  }
}
