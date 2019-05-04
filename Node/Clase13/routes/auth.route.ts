import { AuthController } from '../api/controllers/auth.controller';
import express = require("express")

const controller = new AuthController()
const Router = express.Router()

Router.post("/login", controller.login)
Router.post("/new-access-token", controller.newAccessToken)

export { Router }