import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class AutenticacionService {

	private estadoUsuario: boolean = false
	onCambioEstado: EventEmitter<boolean> = new EventEmitter<boolean>()

	constructor() { }

	login() {
		this.estadoUsuario = true
		this.onCambioEstado.emit(true)
	}

	logout() {
		this.estadoUsuario = false
		this.onCambioEstado.emit(false)
	}

	estaLogueado(): boolean {
		return this.estadoUsuario
	}

}
