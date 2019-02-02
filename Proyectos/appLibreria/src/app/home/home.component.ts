import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

	@Output() onCambioVista = new EventEmitter<string>()

	constructor() { }

	ngOnInit() {
	}

	vista(vista: string) {
		this.onCambioVista.emit(vista)
	}

}
