import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {

  cloneReq: HttpRequest<unknown>;

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log(request);
    if(request.url.includes('http://localhost:1337')){
      this.cloneReq = request.clone({headers : request.headers.set( 'Authorization', 'Bearer '+localStorage.getItem('token'))})
    }
    return next.handle(this.cloneReq);
  }
}
