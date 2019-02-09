import { Injectable, EventEmitter } from '@angular/core';
import { ILibro } from '../modelos/libro.interface';

@Injectable({
	providedIn: 'root'
})
export class LibrosService {

	private libros: ILibro[] = []

	onActualizacionCantidad: EventEmitter<number> = new EventEmitter<number>()
	onCambioLibros: EventEmitter<any> = new EventEmitter<any>()

	constructor() { }

	listar(): ILibro[] {
		return this.libros
	}

	insertar(libro: ILibro) {
		this.libros.push(libro)
		this.onActualizacionCantidad.emit(this.libros.length)
		this.onCambioLibros.emit()
	}

	obtenerCantidad(): number {
		return this.libros.length
	}

	eliminar(posicion: number) {
		this.libros.splice(posicion, 1)

		this.onActualizacionCantidad.emit(this.libros.length)
		this.onCambioLibros.emit()
	}
}
