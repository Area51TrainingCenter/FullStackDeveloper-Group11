import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-usuario',
	templateUrl: './usuario.component.html',
	styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

	nombre: string

	//cursos:Array<string>
	cursos: string[] = ["Angular", "Node", "Mongo"]

	desactivado: boolean = false

	constructor() {
		for (var ind = 0; ind < this.cursos.length; ind++) {
			console.log(this.cursos[ind])
		}

		this.cursos.forEach((curso, indice) => {
			console.log(curso)
		})

		for (let curso of this.cursos) {
			console.log(curso)
		}
	}

	ngOnInit() {
		//var self = this
		setInterval(() => {
			this.desactivado = !this.desactivado
		}, 1000)
	}

	asignar() {
		this.cursos.push(this.nombre)
		this.cursos.sort((a, b) => {
			if (a > b) {
				return 1
			} else {
				return -1
			}
		})
	}

	capturar(par) {
		this.nombre = par.target.value
		console.log(par)
	}

}
