import { Component } from '@angular/core';
import { ILogin } from './modelos/login.interface';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	logueado: boolean = false
	correoDelUsuario: string

	cambioEstadoUsuario(datos: ILogin) {
		this.logueado = datos.estado
		this.correoDelUsuario = datos.correo
	}
}
