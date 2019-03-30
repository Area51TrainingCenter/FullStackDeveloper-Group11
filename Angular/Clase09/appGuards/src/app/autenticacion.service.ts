import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {

  constructor(private router: Router) { }

  login() {
    sessionStorage.setItem("usuario", JSON.stringify({ nombre: "usuario", rol: "operador" }))
    this.router.navigate(["/usuarios"])
  }

  logout() {
    sessionStorage.clear()
    this.router.navigate(["/"])
  }

  estaAutenticado(): boolean {
    return sessionStorage.getItem("usuario") ? true : false
  }
}
