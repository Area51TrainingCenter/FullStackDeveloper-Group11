import fs = require("fs")

const lecturaStream = fs.createReadStream("./lectura.txt", { encoding: "utf-8" })

const escrituraStream = fs.createWriteStream("./escritura.txt", { encoding: "utf-8" })

lecturaStream.on("data", chuck => {
	console.log(chuck)
	escrituraStream.write(chuck)
})