import mongoose = require("mongoose")

const esquema = new mongoose.Schema({
	nombre: {
		type: String,
		required: true,
		trim: true,
		uppercase: true
	}
})

const Rol = mongoose.model("Rol", esquema)

export default Rol