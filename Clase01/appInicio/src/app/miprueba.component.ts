import { Component } from "@angular/core"

@Component({
	selector: "[mi-prueba]",
	templateUrl: "./miprueba.component.html",
	styleUrls: ["./miprueba.component.css"]
})
export class MiPruebaComponent {
	titulo: string = 'Curso de FullStack'
	descripcion: string = "Curso que consta de 3 cursos: Angular, Node y Mongo"
	horario: string = "Sabados de 9:30am a 3:30pm"
}