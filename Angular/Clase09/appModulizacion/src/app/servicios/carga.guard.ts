import { Injectable } from '@angular/core';
import { CanLoad, CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CargaGuard implements CanLoad, CanActivate {
  canLoad(): boolean {
    return true;
  }

  canActivate(): boolean {
    return true
  }
}
