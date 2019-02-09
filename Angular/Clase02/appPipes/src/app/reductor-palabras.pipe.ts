import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
	name: "reductorPalabras"
})
export class ReductorPalabras implements PipeTransform {
	transform(val: string, cantidadPalabras: number, texto: string) {
		const palabras: Array<string> = val.split(" ")

		if (palabras.length > cantidadPalabras) {
			return palabras.slice(0, cantidadPalabras).join(" ") + texto
		}
		return val
	}
}