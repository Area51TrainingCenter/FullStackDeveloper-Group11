import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario.class';
import { LogService } from '../log.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	constructor(private usuarioService: Usuario, private logService: LogService) {
		console.log("constructor login")
	}

	ngOnInit() {
		console.log("ngoninit login")
		this.logService.EscribirConsola("cambio el estado", "info")
		//console.log("Desde Login", this.usuarioService.estado)
		/* 		const objUsuario = new Usuario()
				console.log("Desde Login", objUsuario.estado)
				objUsuario.cambiarEstado(true)
				console.log("Desde Login", objUsuario.estado) */
	}

	login() {
		this.usuarioService.cambiarEstado(true)
	}

	logout() {
		this.usuarioService.cambiarEstado(false)
	}

}
