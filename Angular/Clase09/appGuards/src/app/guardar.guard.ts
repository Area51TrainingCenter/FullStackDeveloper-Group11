import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { ListadoComponent } from './listado/listado.component';
import { Guardar } from './guardar.interface';


@Injectable({
  providedIn: 'root'
})
export class GuardarGuard implements CanDeactivate<Guardar> {

  canDeactivate(componente): boolean {
    const estado = componente.canDeactivateGuardar()

    if (estado) return true

    if (!estado) {
      if (confirm("Hay data no guardada, ¿quieres salir?")) {
        return true
      }
      return false
    }
  }
}
