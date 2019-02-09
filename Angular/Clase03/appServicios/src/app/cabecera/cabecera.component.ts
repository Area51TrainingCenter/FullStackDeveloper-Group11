import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario.class';
import { Subscription } from 'rxjs';

@Component({
	selector: 'app-cabecera',
	templateUrl: './cabecera.component.html',
	styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {

	estadoDelUsuario: boolean = false
	suscripcion: Subscription

	constructor(private usuarioService: Usuario) {
		console.log("constructor cabecera")
	}

	ngOnInit() {
		this.estadoDelUsuario = this.usuarioService.estado
		console.log("ngoninit cabecera")
		//this.usuarioService.cambiarEstado(true)
		/* 		const actividadUsuario = new Usuario()
				actividadUsuario.estado = true
				console.log("Desde Cabecera", actividadUsuario.estado) */
	}

	suscribir() {
		this.suscripcion = this.usuarioService.onCambioEstadoUsuario.subscribe(
			estado => this.estadoDelUsuario = estado
		)
	}

	desuscribir() {
		this.suscripcion.unsubscribe()
	}
}
