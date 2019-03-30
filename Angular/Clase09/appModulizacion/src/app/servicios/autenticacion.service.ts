import { Usuario } from '../../../../../Clase03/appServicios/src/app/usuario.class';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {

  onEstadoUsuario: Subject<boolean> = new Subject<boolean>()

  constructor(private router: Router) { }

  login(usuario: Usuario) {
    sessionStorage.setItem("usuario", JSON.stringify(usuario))
    this.router.navigate(["/clientes"])
    this.onEstadoUsuario.next(true)
  }

  logout() {
    sessionStorage.clear()
    this.router.navigate(["/"])
    this.onEstadoUsuario.next(false)
  }

  estaAutenticado(): boolean {
    return sessionStorage.getItem("usuario") ? true : true
  }
}
