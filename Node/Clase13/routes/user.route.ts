import express = require("express")
import { authenticacion } from "../api/politicies/authentication.policy";
import { authorization } from "../api/politicies/authorization.policy";
import { UserController } from "../api/controllers/user.controller";

const Router = express.Router()

const controller = new UserController()

Router.get("/", authenticacion, authorization("ADMIN", "OPERATOR"),
	controller.list
)

Router.put("/:_id", authenticacion, authorization("ADMIN", "OPERATOR"), controller.update)

Router.post("/", controller.insert)

Router.delete("/:_id", authenticacion, authorization("ADMIN", "OPERATOR"), controller.delete)

export { Router }