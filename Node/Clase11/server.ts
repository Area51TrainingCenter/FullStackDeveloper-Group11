import express = require("express")
import fs = require("fs")
import path = require("path")
import { Request, Response } from "express"

const app = express()

app.use("/assets", (req: Request, res: Response) => {
	const ruta = path.join(__dirname, "/public/assets", req.url)

	fs.exists(ruta, existe => {
		if (existe) {
			res.sendFile(ruta)
		}
	})

	//console.log(req.url)
})

app.get("/", (req: Request, res: Response) => {
	res.sendFile(__dirname + "/public/index.html")
})

app.listen(3000, () => console.log("Server running on port 3000"))