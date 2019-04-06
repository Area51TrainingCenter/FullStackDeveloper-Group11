//import * as fs from "fs"
import fs = require("fs")
//const fs = require("fs")

//const reader = fs.readFileSync("./lectura.txt", "utf-8")
console.log("inicio", Date.now())
/* const reader = fs.readFileSync("./lectura.txt", { encoding: "utf-8" })
console.log(reader) */

fs.readFile("./lectura.txt", { encoding: "utf-8" }, (err, dataLeida) => {
	if (err) {
		console.log(err)
		return false
	}

	console.log(dataLeida)
})

console.log("fin", Date.now())