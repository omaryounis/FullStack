
import { Injectable } from '@angular/core';
import { HttpClient, ɵangular_packages_common_http_http_a } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AccountService {
  baseUrl:string='https://localhost:5001/api/';

  constructor(private _http:HttpClient) { }
  login(model:any)
  {
    return this._http.post(this.baseUrl+'Account/login',model);
  }
}
