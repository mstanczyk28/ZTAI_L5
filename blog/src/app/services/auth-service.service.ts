import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
// import {Token} from "@angular/compiler";
import {JwtHelper} from "angular2-jwt";
import {Token} from '../models/token';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  private url = 'https://localhost:8080/api';

  constructor(private http: HttpClient) {
  }

  authenticate(credentials) {
    return this.http.post(this.url + '/user/auth', {
      login: credentials.login,
      password: credentials.password
    }).pipe(
      map((result: Token) => {
        if (result && result.token) {
          localStorage.setItem('token', result.token);
          return true;
        }
        return false;
      })
    );
  }

  createOrUpdate(credentials) {
    return this.http.post(this.url + '/user/create', credentials);
  }

  logout() {
    return this.http.delete(this.url + '/user/logout/' + this.currentUser.userId)
      .pipe(
        map(() => {
          localStorage.removeItem('token');
        })
      );
  }

  isLoggedIn() {
    const jwtHelper = new JwtHelper();
    const token = localStorage.getItem('token');
    if (!token) {
      return false;
    }
    return !(jwtHelper.isTokenExpired(token));
  }


  get currentUser() {
    const token = this.getToken();
    if (!token) {
      return null;
    }

    return new JwtHelper().decodeToken(token);
  }

  getToken() {
    return localStorage.getItem('token');
  }
}
