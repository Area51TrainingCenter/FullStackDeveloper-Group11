export class LogService {
	EscribirConsola(texto: string, tipo: string) {
		if (tipo == "error") {
			console.log(`%c ${texto}`, "color: red")
		} else if (tipo == "info") {
			console.log(`%c ${texto}`, "color: green")
		}
	}
}