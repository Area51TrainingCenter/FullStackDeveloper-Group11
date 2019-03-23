import { Injectable } from '@angular/core';
import { Usuario } from '../interfaces/usuario';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  listar(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>("http://test.tibajodemanda.com/user")
  }

  insertar(usuario: Usuario): Observable<any> {
    return this.http.post("http://test.tibajodemanda.com/user", usuario)
  }
}
