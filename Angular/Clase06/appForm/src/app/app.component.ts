import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl, ValidatorFn } from '@angular/forms';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {

	grupo: FormGroup

	dominiosCorreoValidos: Array<string> = ["area51.com.pe", "area51.pe"]

	expresionRegularCorreo = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i

	ngOnInit() {
		this.grupo = new FormGroup({
			nombreCompleto: new FormControl(null, Validators.required),
			correo: new FormControl(null, [Validators.required, this.validadorExpresionRegular(this.expresionRegularCorreo), this.validadorCorreoEmpresarial.bind(this)]),
			contrasena: new FormControl(null, [Validators.required, Validators.minLength(6)]),
			confirmacion: new FormControl(null, [Validators.required, this.validatorConfirmacionContrasena])
		})
	}

	validadorExpresionRegular(patron): ValidatorFn {
		return (control: FormControl): { [s: string]: boolean } => {
			if (!control || control.value == null || control.value == "") return null

			if (!patron.test(control.value)) return { correoNoValido: true }

			return null
		}
	}

	validadorCorreoEmpresarial(control: FormControl): { [s: string]: boolean } {
		if (!control || control.value == null || control.value == "" || control.value.indexOf("@") == -1) return null

		const dominio = control.value.split("@")[1]

		if (this.dominiosCorreoValidos.indexOf(dominio) == -1) {
			return { correoNoEmpresarial: true }
		}

		return null
	}

	validatorConfirmacionContrasena(control: AbstractControl): { [s: string]: boolean } {
		if (!control || !control.parent) return null

		const contrasena = control.parent.get("contrasena")
		const confirmacion = control.parent.get("confirmacion")

		if (!contrasena || !confirmacion) return null

		if (contrasena.value == "") return null

		if (contrasena.value != confirmacion.value) return { confirmacionNoValida: true }

		return null
	}

	registrar() {
		console.log(this.grupo)
	}
}
