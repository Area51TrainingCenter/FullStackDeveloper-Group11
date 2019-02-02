import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-registro',
	templateUrl: './registro.component.html',
	styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

	@Output() onRegistro = new EventEmitter<string>()

	constructor() { }

	ngOnInit() {
	}

	registrar() {
		this.onRegistro.emit('login')
	}

}
