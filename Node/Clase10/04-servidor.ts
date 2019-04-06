import http = require("http")
import fs = require("fs")

const servidor = http.createServer((request, response) => {
	// Enviando un texto plano
	//response.writeHead(200, { "content-type": "text/plain" })
	/* 	response.setHeader("content-type", "text/plain")
		response.statusCode = 200
		response.write("Mensaje enviado por el servidor")
		response.write("Otro mensaje enviado por el servidor")
		response.end("Con esto terminamos la conversación") */

	// Enviando un texto html
	/* 	response.writeHead(200, { "content-type": "text/html" })
		response.end("<strong>Texto enviado en formato html por <em>Node</em></strong") */

	// Enviando una página html
	/* 	response.writeHead(200, { "content-type": "text/html; charset=utf-8" })
		response.end(`
			<!doctype html>
			<html>
				<head>
					<title>Página enviando por Node</title>
				</head>
				<body>
					<h1>Hola Mundo</h1>
				</body>
			</html>
		`) */

	// Enviando archivo html	
	/* 	response.writeHead(200, { "content-type": "text/html" })
		const lecturaStream = fs.createReadStream("./index.html", { encoding: "utf-8" })
		lecturaStream.pipe(response) */

	// Enviando archivo pdf
	/* 	response.writeHead(200, { "content-type": "application/pdf" })
		const lecturaStream = fs.createReadStream("./manual.pdf")
		lecturaStream.pipe(response) */

	// Enviando un json
	response.writeHead(200, { "content-type": "application/json" })
	response.end(JSON.stringify({
		status: 200,
		results: [
			{ user: "user01" },
			{ user: "user02" },
			{ user: "user03" }
		]
	}))
})

servidor.listen(3000, () => console.log("Servidor ejecutándose"))