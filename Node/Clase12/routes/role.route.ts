import express = require("express")
import { Request, Response, NextFunction } from "express"
import { authenticacion } from "../api/politicies/authentication.policy";
import { authorization } from "../api/politicies/authorization.policy";
import { RoleController } from "../api/controllers/role.controller";

const Router = express.Router()

const controller = new RoleController()

Router.get("/", authenticacion, authorization("ADMIN"),
	controller.list
)

Router.put("/:id", authenticacion, authorization("ADMIN"), (req: Request, res: Response) => {
	res.send("Role modified")
})

Router.post("/", authenticacion, authorization("ADMIN"), controller.insert)

Router.delete("/:id", authenticacion, authorization("ADMIN"), (req: Request, res: Response) => {
	res.send("Role deleted")
})

export { Router }