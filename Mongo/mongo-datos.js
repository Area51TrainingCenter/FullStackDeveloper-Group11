db.usuarios.insertMany([
	{ nombre: "Raúl", edad: 15, sexo: "H" },
	{ nombre: "Pierina", edad: 56, sexo: "M" }
])

db.curso.insertMany([
	{ nombreCurso: "Matemáticas" },
	{ nombreCurso: "Personal Social" },
	{ nombreCurso: "Ciencia y Ambiente" }
])

db.alumno.insertMany([
	{ nombreAlumno: "Pedro", curso: ObjectId("5cd7082e7f2bdb21beb74f10") },
	{ nombreAlumno: "Javier", curso: ObjectId("5cd7082e7f2bdb21beb74f10") },
	{ nombreAlumno: "Luisa", curso: ObjectId("5cd7082e7f2bdb21beb74f10") },
	{ nombreAlumno: "Claudia", curso: ObjectId("5cd7082e7f2bdb21beb74f12") },
	{ nombreAlumno: "Camila", curso: ObjectId("5cd7082e7f2bdb21beb74f12") }
])

db.curso.aggregate([
	{ $sort: { nombreCurso: 1 } },
	{
		$lookup: {
			from: "alumno",
			localField: "_id",
			foreignField: "curso",
			as: "lista"
		}
	},
	{
		$group: {
			"_id": "$estado",
			cuenta: { "$sum": 1 }
		}
	},
	{ $project: { nombreCurso: 1, estado: 1, cuenta: 1 } }
])

// { $project: { nombreCurso: 1, "lista.nombreAlumno": 1 } }


