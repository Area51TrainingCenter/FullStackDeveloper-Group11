import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	correo: string

	@Output() onLogin = new EventEmitter<string>()
	@Output() onCorreoLogueado = new EventEmitter<string>()

	constructor() { }

	ngOnInit() {
	}

	ingresar() {
		this.onLogin.emit('libros')
		this.onCorreoLogueado.emit(this.correo)
	}

	capturar(valor: string) {
		this.correo = valor
	}

}
