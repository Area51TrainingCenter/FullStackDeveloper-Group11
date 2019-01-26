import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-personas',
	templateUrl: './personas.component.html',
	styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {

	personas: Array<string> = []
	nombre: string
	constructor() { }

	ngOnInit() {
	}

	capturar(valor) {
		this.nombre = valor
	}

	agregar() {
		if (this.nombre.trim() != "") {
			this.personas.unshift(this.nombre)
		}
	}
}
