import http = require("http")
import fs = require("fs")

const listadoUsuarios = (res: http.ServerResponse) => {
	res.writeHead(200, { "content-type": "application/json" })
	res.end(JSON.stringify({
		status: 200,
		results: [
			{ user: "user01" },
			{ user: "user02" },
			{ user: "user03" }
		]
	}))
}

const descargarManual = (res: http.ServerResponse) => {
	res.writeHead(200, { "content-type": "application/pdf" })
	const lecturaPDFStream = fs.createReadStream("./manual.pdf")
	lecturaPDFStream.pipe(res)
}

const home = (res: http.ServerResponse) => {
	res.writeHead(200, { "content-type": "text/html" })
	const lecturaStream = fs.createReadStream("./index.html", { encoding: "utf-8" })
	lecturaStream.pipe(res)
}

export { listadoUsuarios, descargarManual, home }