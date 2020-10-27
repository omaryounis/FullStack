import { Component, OnInit } from '@angular/core';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLogged:boolean;
  loginModel:any={};
  constructor(private _accountService : AccountService) { }

  ngOnInit(): void {
  }
  login(){
    console.log(this._accountService.login(this.loginModel).subscribe(response=>
    {
        console.log(response);
        this.isLogged=true;
    },error=>{
        console.log(error);
        this.isLogged=false;
      })
    )
  }
  logout(){

  }
}
