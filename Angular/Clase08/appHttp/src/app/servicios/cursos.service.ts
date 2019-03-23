import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  constructor(private http: HttpClient) { }

  listar() {
    this.http.get("http://cursos.tibajodemanda.com/cursos")
      .subscribe(
        data => console.log(data)
      )
  }
}
