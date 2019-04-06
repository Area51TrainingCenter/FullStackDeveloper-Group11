import { Request, Response } from "express"
import path = require("path")

const controller = {
	listado: (req: Request, res: Response) => {
		res
			.type("application/json")
			.status(200)
			.json([
				{ user: "user01" },
				{ user: "user02" },
				{ user: "user03" }
			])
	},
	home: (req: Request, res: Response) => {
		res
			.type("text/html")
			.status(200)
			.sendFile(path.join(__dirname, "../../", "index.html"))
	},
	descargar: (req: Request, res: Response) => {
		res
			.type("application/pdf")
			.status(200)
			.sendFile(path.join(__dirname, "../../", "manual.pdf"))
	}
}

export { controller }