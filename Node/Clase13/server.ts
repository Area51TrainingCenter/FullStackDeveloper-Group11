// Importaciones
import express = require("express")
import { notFound, general } from "./handlers/errors.handler";
import { Router as routerUser } from "./routes/user.route"
import { Router as routerIndex } from "./routes/index.route"
import { Router as routerRole } from "./routes/role.route"
import { Router as routerAuth } from "./routes/auth.route"

import dotenv = require("dotenv")
dotenv.config({ path: "./variables.env" })

import mongoose = require("mongoose")
import bodyParser = require("body-parser")

// Database
mongoose.Promise = global.Promise
mongoose.connect(process.env.CONEXION_MONGO, { useNewUrlParser: true })
mongoose.connection.on("connected", () => console.log("Conectado a Mongo"))
mongoose.connection.on("error", () => console.log("Error de conexión"))
// Modelos
require("./api/models/role.model")
require("./api/models/user.model")

// Declaraciones
const app = express()

// Middlewares
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// Rutas
app.use(express.static("./public"))
app.use("/", routerIndex)
app.use("/usuarios", routerUser)
app.use("/roles", routerRole)
app.use("/auth", routerAuth)

// Manejadores de errores
app.use(notFound)
app.use(general)

// Servidor
app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`))