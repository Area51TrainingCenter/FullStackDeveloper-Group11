import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ILogin } from '../modelos/login.interface';

@Component({
	selector: 'app-cabecera',
	templateUrl: './cabecera.component.html',
	styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {

	@Input("correoUsuario") correo: string

	@Output() onCerrarSesion = new EventEmitter<ILogin>()
	constructor() { }

	ngOnInit() {
	}

	logout() {
		this.onCerrarSesion.emit({ correo: "", estado: false })
	}

}
