import http = require("http")
import fs = require("fs")

const servidor: http.Server = http.createServer(
	(req: http.IncomingMessage, res: http.ServerResponse) => {
		const ruta = req.url.toLowerCase().trim()
		const metodo = req.method.toLowerCase().trim()
		let rutaEncontrada = false

		switch (ruta) {
			case "/usuarios/listado":
				if (metodo == "get") {
					res.writeHead(200, { "content-type": "application/json" })
					res.end(JSON.stringify({
						status: 200,
						results: [
							{ user: "user01" },
							{ user: "user02" },
							{ user: "user03" }
						]
					}))
					rutaEncontrada = true
				}
				break
			case "/":
				res.writeHead(200, { "content-type": "text/html" })
				const lecturaStream = fs.createReadStream("./index.html", { encoding: "utf-8" })
				lecturaStream.pipe(res)
				rutaEncontrada = true
				break
			case "/descarga/manual":
				if (metodo == "post") {
					res.writeHead(200, { "content-type": "application/pdf" })
					const lecturaPDFStream = fs.createReadStream("./manual.pdf")
					lecturaPDFStream.pipe(res)
					rutaEncontrada = true
				}
				break
		}

		if (!rutaEncontrada) {
			res.writeHead(404, { "content-type": "text/plain" })
			res.end("Ruta no encontrada")
		}
	}
)

servidor.listen(3000, () => console.log("Servidor ejecutándose"))