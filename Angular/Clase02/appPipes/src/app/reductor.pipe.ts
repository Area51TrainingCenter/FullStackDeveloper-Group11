import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
	name: "reductor"
})
export class ReductorPipe implements PipeTransform {
	transform(texto: string, num: number, adicional: string) {
		if (texto.length > num) return texto.slice(0, num) + " " + adicional

		return texto
	}
}