import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'test-error',
  templateUrl: './test-error.component.html' 
})
export class TestErrorComponent implements OnInit {
  baseUrl='https://localhost:5001/api/'
  constructor(private _http:HttpClient) { }

  ngOnInit(): void {
  }

  get404Error(){
    this._http.get(this.baseUrl+'buggy/not-found').subscribe(respponse=>{
        console.log(respponse);
    },error=>{
      console.log(error);
    })
  }

  get400Error(){
    this._http.get(this.baseUrl+'buggy/bad-request').subscribe(respponse=>{
        console.log(respponse);
    },error=>{
      console.log(error);
    })
  } 
  get500Error(){
    this._http.get(this.baseUrl+'buggy/server-error').subscribe(respponse=>{
        console.log(respponse);
    },error=>{
      console.log(error);
    })
  }
  get401Error(){
    this._http.get(this.baseUrl+'buggy/auth').subscribe(respponse=>{
        console.log(respponse);
    },error=>{
      console.log(error);
    })
  }
  get400ValidationError(){
    this._http.get(this.baseUrl+'User/Register',{}).subscribe(respponse=>{
        console.log(respponse);
    },error=>{
      console.log(error);
    })
  }
}
