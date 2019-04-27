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

Router.put("/:_id", authenticacion, authorization("ADMIN"), controller.update)

Router.post("/", authenticacion, authorization("ADMIN"), controller.insert)

Router.delete("/:_id", authenticacion, authorization("ADMIN"), controller.delete)

export { Router }