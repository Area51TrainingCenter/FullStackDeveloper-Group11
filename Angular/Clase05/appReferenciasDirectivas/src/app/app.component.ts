import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {

	@ViewChild("inputNombre") nombreInput: ElementRef

	color1: string = "greenyellow"
	color2: string = "skyblue"

  pApellido = "Hidalgo"

  estado: boolean = false

  movimiento(estado: boolean) {
    this.estado = estado
  }

  recepcion(fl: FileList) {
    console.log(fl)
  }

	ngAfterViewInit() {
		this.nombreInput.nativeElement.style = "background-color:yellow"
	}

	saludar(apellido: string) {
		this.pApellido = apellido
		console.log(`Hola ${apellido}`)
	}

	agregarOtraForma() {
		console.log(this.nombreInput.nativeElement.value)
	}

	agregarNombre(nombre: string) {
		console.log(nombre)
	}
}
