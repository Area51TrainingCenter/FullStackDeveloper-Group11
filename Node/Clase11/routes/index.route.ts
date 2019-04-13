import express = require("express")
import path = require("path")
import { Request, Response, NextFunction } from "express"

const Router = express.Router()

Router.get("/login", (req: Request, res: Response) => {
	const ruta = path.join(__dirname, "../", "/public/index.html")
	res.sendFile(ruta)
})

export { Router }