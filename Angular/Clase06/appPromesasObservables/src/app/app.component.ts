import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	usuarios: [] = []

	ngOnInit() {
		const promesaDelApiRest = new Promise((resolve, reject) => {
			/* 			setTimeout(() => {
							resolve([
								{ nombre: "Alberto", edad: 40 },
								{ nombre: "Juana", edad: 23 },
								{ nombre: "Carmen", edad: 27 },
								{ nombre: "Antonio", edad: 55 }
							])
						}, 3000) */
			setTimeout(() => {
				reject({
					status: 409,
					message: "No está autorizado para esta acción"
				})
			}, 2000)
		})

		promesaDelApiRest.then(
			(data: []) => {
				this.usuarios = data
			},
			error => {
				console.log(error)
			}
		)

	}



}
