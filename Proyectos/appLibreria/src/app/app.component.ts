import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	vistaAMostrar: string = "home"
	correoUsuario: string

	cambiarVista(vista: string) {
		this.vistaAMostrar = vista
	}
}
