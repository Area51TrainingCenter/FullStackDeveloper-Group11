import express = require("express")
import fs = require("fs")
import path = require("path")
import { Request, Response, NextFunction } from "express"

interface IError extends Error {
	status?: number
}

const app = express()

app.use(express.static("./public"))

/* app.use((req: Request, res: Response, next: NextFunction) => {
	const ruta = path.join(__dirname, "/public", req.url)

	fs.exists(ruta, existe => {
		if (existe) {
			res.sendFile(ruta)
		} else {
			next()
		}
	})
}) */

app.get("/", (req: Request, res: Response) => {
	res.sendFile(__dirname + "/public/index.html")
})

/* app.use("/usuarios/listar", (req: Request, res: Response) => {
	res
		.status(401)
		.send("Usuario no logueado")
}) */

app.get("/usuarios/listar",

	(req: Request, res: Response, next: NextFunction) => {
		/* res
			.status(401)
			.send("Usuario no logueado") */
		next()
	},

	(req: Request, res: Response) => {
		res
			.status(200)
			.json([
				{ user: "user01" },
				{ user: "user02" }
			])
	}

)

app.use((req: Request, res: Response, next: NextFunction) => {
	const err: IError = new Error("Path not found")
	err.status = 404

	next(err)

	//res.status(404).send("Not Found")
})

app.use((err: IError, req: Request, res: Response, next: NextFunction) => {
	res
		.status(err.status)
		.json({
			name: err.name,
			status: err.status,
			message: err.message,
			stack: err.stack
		})
})

app.listen(3000, () => console.log("Server running on port 3000"))