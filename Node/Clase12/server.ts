// Importaciones
import express = require("express")
import { notFound, general } from "./handlers/errors.handler";
import { Router as routerUser } from "./routes/user.route"
import { Router as routerIndex } from "./routes/index.route"
import mongoose = require("mongoose")

// Database
mongoose.Promise = global.Promise
mongoose.connect("mongodb+srv://shidalgo:Perucampeon2022@cluster0-2a0hw.mongodb.net/test?retryWrites=true", { useNewUrlParser: true })
mongoose.connection.on("connected", () => console.log("Conectado a Mongo"))
mongoose.connection.on("error", () => console.log("Error de conexión"))

// Declaraciones
const app = express()

// Modelos
require("./api/models/role.model")

// Rutas
app.use(express.static("./public"))
app.use("/", routerIndex)
app.use("/usuarios", routerUser)
app.use("/roles", routerRole)

// Manejadores de errores
app.use(notFound)
app.use(general)

// Servidor
app.listen(3000, () => console.log("Server running on port 3000"))