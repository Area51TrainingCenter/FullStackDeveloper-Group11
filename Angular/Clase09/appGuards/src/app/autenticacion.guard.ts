import { Injectable } from "@angular/core";
import { CanActivate, CanActivateChild } from '@angular/router';
import { AutenticacionService } from './autenticacion.service';

@Injectable({
  providedIn: "root"
})
export class AutenticacionGuard implements CanActivate, CanActivateChild {

  constructor(private autenticacionService: AutenticacionService) { }

  canActivate(): boolean {
    return this.autenticacionService.estaAutenticado()
  }

  canActivateChild(): boolean {
    return this.autenticacionService.estaAutenticado()
  }

}
