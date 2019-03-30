
import { Component } from '@angular/core';
import { AutenticacionService } from './autenticacion.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private autenticacionService: AutenticacionService) { }

  cerrarSesion() {
    this.autenticacionService.logout()
  }
}
