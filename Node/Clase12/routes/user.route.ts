import express = require("express")
import { Request, Response, NextFunction } from "express"
import { authenticacion } from "../api/politicies/authentication.policy";
import { authorization } from "../api/politicies/authorization.policy";

const Router = express.Router()

Router.get("/listar", authenticacion,
	(req: Request, res: Response) => {
		res
			.status(200)
			.json([
				{ user: "user01" },
				{ user: "user02" }
			])
	}
)

Router.get("/modificar", authenticacion, authorization("ADMIN", "SUPER"), (req: Request, res: Response) => {
	res.send("User modified")
})

export { Router }