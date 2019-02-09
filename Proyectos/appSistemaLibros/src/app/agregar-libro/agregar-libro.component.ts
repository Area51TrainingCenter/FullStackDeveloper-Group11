import { Component, OnInit } from '@angular/core';
import { LibrosService } from '../servicios/libros.service';
import { ILibro } from '../modelos/libro.interface';

@Component({
	selector: 'app-agregar-libro',
	templateUrl: './agregar-libro.component.html',
	styleUrls: ['./agregar-libro.component.css']
})
export class AgregarLibroComponent implements OnInit {
	titulo: string = ""

	constructor(private librosService: LibrosService) { }

	ngOnInit() {
	}

	nombreLibro(titulo: string) {
		this.titulo = titulo
	}

	agregar() {
		if (this.titulo.trim() != "") {
			const libro: ILibro = { titulo: this.titulo }
			this.librosService.insertar(libro)
		}
	}

}
