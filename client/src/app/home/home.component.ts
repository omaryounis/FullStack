import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
 
  isRegister:boolean=false;
  
  constructor() { 
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
