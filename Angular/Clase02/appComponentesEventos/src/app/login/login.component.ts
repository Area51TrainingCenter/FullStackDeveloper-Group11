import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ILogin } from '../modelos/login.interface';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	correo: string

	/* 	@Output() onIngresar = new EventEmitter<{correo: string, estado: boolean}>() */
	@Output() onIngresar = new EventEmitter<ILogin>()
	constructor() { }

	ngOnInit() {
	}

	loguearse() {
		const datosAEnviar: ILogin = { correo: this.correo, estado: true }
		this.onIngresar.emit(datosAEnviar)
		//console.log("Usuario logueado")
	}

	capturarCorreo(correo: string) {
		this.correo = correo
		/* this.correo = evento.target.value
		console.log(evento) */
	}

}
