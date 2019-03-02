import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	@ViewChild("formulario") formulario: NgForm

	ngOnInit() {
		setTimeout(() => {
			/* 			this.formulario.setValue({
							nombreCompleto: "Juan Pérez",
							correo: "juan.perez@comun.com",
							contrasena: "123456789"
						}) */

			this.formulario.form.patchValue({
				correo: "juan.perez@comun.com",
				contrasena: "abcdefg"
			})

		}, 0)
	}

	registrar() {
		console.log(this.formulario.value)
		this.formulario.reset()
		/* 		if (!this.formulario.valid) alert("Los campos no son válidos")
				console.log(this.formulario) */
	}
}
