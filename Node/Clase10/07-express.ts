import { controller } from './api/controllers/index.controller';
import express = require("express")

const app = express()

app.get("/usuarios/listado", controller.listado)
app.get("/home", controller.home)
app.get("/descargar/manual", controller.descargar)

app.listen(3000, () => console.log("Servidor ejecutándose"))