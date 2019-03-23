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
    if (sessionStorage.getItem("accessToken")) {
      const headers = new HttpHeaders({
        "authorization": `Bearer ${sessionStorage.getItem("accessToken")}`
      })

      return this.http.get<Usuario[]>("http://test.tibajodemanda.com/user", { headers })
    }

    return of([])
  }
}
