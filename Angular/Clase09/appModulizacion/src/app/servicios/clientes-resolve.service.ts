import { Injectable } from "@angular/core";
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Resolve } from '@angular/router';

@Injectable({
  providedIn: "root"
})
export class ClientesResolve implements Resolve<any> {

  dataClientes: any
  dataRoles: any

  resolve(): Promise<any> {
    return Promise.all([
      this.listaClientes(), this.listaRoles()
    ])
  }

  listaClientes(): Promise<any> {
    return new Promise((resolve, reject) => {
      of([
        { nombre: "cliente1" },
        { nombre: "cliente2" }
      ])
        .pipe(
          delay(4000)
        )
        .subscribe(
          dataClientes => {
            this.dataClientes = dataClientes
            resolve()
          }
        )

    })
  }

  listaRoles(): Promise<any> {
    return new Promise((resolve, reject) => {
      of([
        { rol: "rol1" },
        { rol: "rol2" }
      ])
        .pipe(
          delay(6000)
        )
        .subscribe(
          dataRoles => {
            this.dataRoles = dataRoles
            resolve()
          }
        )

    })
  }

}
