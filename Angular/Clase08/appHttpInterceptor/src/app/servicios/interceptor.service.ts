import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpEvent, HttpHandler } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class InterceptorService implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    let autorizacion = ""

    if (sessionStorage.getItem("accessToken")) {
      autorizacion = `Bearer ${sessionStorage.getItem("accessToken")}`
    }

    let peticionClonada = req.clone({ headers: req.headers.append("Authorization", autorizacion) })

    return next.handle(peticionClonada)
  }

  constructor() { }
}
