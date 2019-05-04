const mongoose = require("mongoose")

const esquema = new mongoose.Schema({
	nombre: {
		type: String,
		required: true,
		trim: true,
		uppercase: true
	}
}, {
		toJSON: { virtuals: true },
		toObject: { virtuals: true }
	})

esquema.virtual("usuario", {
	ref: "User",
	localField: "_id",
	foreignField: "roles"
})

function autoPopulate(next) {
	this.populate("usuario")
	next()
}

esquema.pre("find", autoPopulate)

esquema.statics.listPagination = function (page: number, size: number) {
	const skip = page * size
	const limit = size

	return this.aggregate([
		{ $skip: skip },
		{ $limit: limit }
	])
}

const Rol = mongoose.model("Rol", esquema)

export default Rol