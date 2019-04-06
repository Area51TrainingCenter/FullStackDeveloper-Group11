import http = require("http")
import fs = require("fs")
import { listadoUsuarios, descargarManual, home } from "./controllers"

interface IRuta {
	path: string
	method: string
	controller: any
}

const rutas: IRuta[] = [
	{ path: "/usuarios/listado", method: "get", controller: listadoUsuarios },
	{ path: "/descarga/manual", method: "post", controller: descargarManual },
	{ path: "/", method: "get", controller: home }
]

const servidor: http.Server = http.createServer(
	(req: http.IncomingMessage, res: http.ServerResponse) => {
		let rutaEncontrada = false
		const ruta = req.url.toLowerCase().trim()
		const metodo = req.method.toLowerCase().trim()

		rutas.forEach((item: IRuta) => {
			if (item.path == ruta && item.method == metodo) {
				item.controller(res)
				rutaEncontrada = true
			}
		})

		if (!rutaEncontrada) {
			res.writeHead(404, { "content-type": "text/plain" })
			res.end("Ruta no encontrada")
		}
	}
)

servidor.listen(3000, () => console.log("Servidor ejecutándose"))