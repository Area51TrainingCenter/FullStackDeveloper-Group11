import express = require("express")
import { Request, Response, NextFunction } from "express"
import { authenticacion } from "../api/politicies/authentication.policy";
import { authorization } from "../api/politicies/authorization.policy";

const Router = express.Router()

Router.get("/", authenticacion,
	(req: Request, res: Response) => {
		res
			.status(200)
			.json([
				{ user: "user01" },
				{ user: "user02" }
			])
	}
)

Router.put("/:_id", authenticacion, authorization("ADMIN", "SUPER"), (req: Request, res: Response) => {
	res.send("User modified")
})

Router.post("/", authenticacion, authorization("ADMIN"), (req: Request, res: Response) => { })

Router.delete("/:id", authenticacion, authorization("ADMIN", "SUPER"), (req: Request, res: Response) => { })

export { Router }