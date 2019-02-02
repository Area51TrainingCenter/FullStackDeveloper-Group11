import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	logueado: boolean = false

	cambioEstadoUsuario(estado: boolean) {
		this.logueado = estado
	}
}
