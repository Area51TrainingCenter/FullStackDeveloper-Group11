// Importacioes
import express = require("express")
import { notFound, general } from "./handlers/errors.handler";
import { Router as routerUser } from "./routes/user.route"
import { Router as routerIndex } from "./routes/index.route"

// Declaración de variables
const app = express()

// Middlewares
app.use(express.static("./public"))
app.use("/", routerIndex)
app.use("/usuarios", routerUser)

// Rutas
app.use(notFound)
app.use(general)

// Servidor
app.listen(3000, () => console.log("Server running on port 3000"))