import { Component, OnInit } from '@angular/core';
import { ILibro } from '../modelos/libro.interface';
import { LibrosService } from '../servicios/libros.service';

@Component({
	selector: 'app-listado-libros',
	templateUrl: './listado-libros.component.html',
	styleUrls: ['./listado-libros.component.css']
})
export class ListadoLibrosComponent implements OnInit {
	libros: ILibro[] = []

	constructor(private librosService: LibrosService) { }

	ngOnInit() {
		this.libros = this.librosService.listar()

		this.librosService.onCambioLibros.subscribe(
			() => {
				this.libros = this.librosService.listar()
			}
		)
	}

}
