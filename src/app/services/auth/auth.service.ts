import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginRequest, LoginResponse } from '../../models/user/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private  http: HttpClient) { }

  login(data: LoginRequest) : Observable<LoginResponse>{
    const url = `http://127.0.0.1:8000/login`;
    return this.http.post<LoginResponse>(url, data);
  }


}
