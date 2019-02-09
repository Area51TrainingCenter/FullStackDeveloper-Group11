import { Component, OnInit, Input } from '@angular/core';
import { ILibro } from '../modelos/libro.interface';
import { LibrosService } from '../servicios/libros.service';

@Component({
	selector: 'app-item',
	templateUrl: './item.component.html',
	styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
	@Input() libro: ILibro
	@Input() indice: number

	constructor(private librosService: LibrosService) { }

	ngOnInit() {
	}

	eliminar() {
		if (confirm("Quiere eliminar?")) {
			this.librosService.eliminar(this.indice)
		}
	}

}
