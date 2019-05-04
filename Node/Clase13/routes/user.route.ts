import express = require("express")
import { authenticacion } from "../api/politicies/authentication.policy";
import { authorization } from "../api/politicies/authorization.policy";
import { UserController } from "../api/controllers/user.controller";

const Router = express.Router()

const controller = new UserController()

Router.get("/", authenticacion, authorization("ADMIN"),
	controller.list
)

Router.put("/:_id", authenticacion, authorization("ADMIN"), controller.update)

Router.post("/", authenticacion, authorization("ADMIN"), controller.insert)

Router.delete("/:_id", authenticacion, authorization("ADMIN"), controller.delete)

export { Router }