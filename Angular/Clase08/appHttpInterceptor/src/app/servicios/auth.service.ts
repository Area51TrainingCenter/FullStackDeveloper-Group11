import { Usuario } from '../interfaces/usuario';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  registro(usuario: Usuario): Observable<any> {
    return this.http.post("http://test.tibajodemanda.com/auth", usuario)
  }

  login(usuario: Usuario): Observable<any> {
    return this.http.post("http://test.tibajodemanda.com/auth/login", usuario)
  }
}
