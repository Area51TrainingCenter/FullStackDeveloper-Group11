import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-cabecera',
	templateUrl: './cabecera.component.html',
	styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {

	@Output() onCerrarSesion = new EventEmitter()
	constructor() { }

	ngOnInit() {
	}

	logout() {
		this.onCerrarSesion.emit()
	}

}
