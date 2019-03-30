
import { Injectable } from "@angular/core";
import { Resolve } from '@angular/router';
import { of, Observable } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Usuario } from '../interfaces/usuario';

@Injectable({
  providedIn: "root"
})
export class UsuarioResolve implements Resolve<Usuario[]> {
  resolve(): Observable<Usuario[]> {
    return of([
      { nombreEmpresa: "empresa1", correo: "c1@correo.com", contrasena: "123" },
      { nombreEmpresa: "empresa2", correo: "c2@correo.com", contrasena: "123" },
      { nombreEmpresa: "empresa3", correo: "c1¡3@correo.com", contrasena: "123" }
    ])
      .pipe(
        delay(5000)
      )
  }
}
