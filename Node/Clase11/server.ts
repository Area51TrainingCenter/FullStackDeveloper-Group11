import express = require("express")
import fs = require("fs")
import path = require("path")
import { Request, Response, NextFunction } from "express"
import { notFound, general } from "./handlers/errors.handler";
import { Router as routerUser } from "./routes/user.route"
import { Router as routerIndex } from "./routes/index.route"

const app = express()

app.use(express.static("./public"))
app.use("/", routerIndex)
app.use("/usuarios", routerUser)

app.use(notFound)
app.use(general)

app.listen(3000, () => console.log("Server running on port 3000"))