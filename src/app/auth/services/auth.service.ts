import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(loginData: any): any {
    return this.http.post('https://reqres.in/api/login', loginData)
      .pipe(map((res: any) => {
        console.log(res);
        return res;
      }));
  }

  // signup can come here


  // is authenticated
  isAuth(): boolean {
    if (localStorage && localStorage.getItem('token')) {
      return true;
    } else {
      return false;
    }
  }

  // logout
  // remove token from localstorage
}
