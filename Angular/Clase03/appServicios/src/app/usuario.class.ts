import { LogService } from "./log.service";
import { Injectable, EventEmitter } from "@angular/core";

@Injectable({
	providedIn: "root"
})
export class Usuario {
	estado: boolean = false

	onCambioEstadoUsuario = new EventEmitter()

	constructor(private logService: LogService) { }

	cambiarEstado(estadoUsuario: boolean) {
		this.logService.EscribirConsola("Estado cambiado", "error")
		this.estado = estadoUsuario
		this.onCambioEstadoUsuario.emit(estadoUsuario)
	}
}