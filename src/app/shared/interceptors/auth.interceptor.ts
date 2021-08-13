import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log(request);

    // accessign the token
    const bearerToken = localStorage.getItem('token');
    // cloning the req
    request = request.clone({ // inside the clone req, attach the bearer token in its header
      setHeaders: {
        Authorization: 'Bearer ' + bearerToken
      }
    });

    console.log(request);
    return next.handle(request);
  }
}
