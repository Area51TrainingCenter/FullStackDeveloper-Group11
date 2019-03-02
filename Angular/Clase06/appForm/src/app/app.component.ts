import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {

	registrar(formulario: NgForm) {
		if (!formulario.valid) alert("Los campos no son válidos")
		console.log(formulario)
	}
}
