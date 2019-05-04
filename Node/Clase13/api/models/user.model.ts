const mongoose = require("mongoose")

const esquema = new mongoose.Schema({
	nombre: {
		type: String,
		required: true
	},
	username: {
		type: String,
		required: true,
		trim: true,
		lowercase: true
	},
	contrasena: {
		type: String,
		required: true,
		trim: true
	},
	refreshToken: {
		type: String,
		required: true
	},
	roles: [{
		type: mongoose.Schema.ObjectId,
		ref: "Rol"
	}]
})

function autoPopulate(next) {
	this.populate("roles")
	next()
}

esquema.pre("find", autoPopulate)

const User = mongoose.model("User", esquema)

export default User