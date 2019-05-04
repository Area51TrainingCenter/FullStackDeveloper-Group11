import { Request, Response, NextFunction } from "express";
import { validateAccessToken } from "../../utils/tokens";

const authenticacion = (req: Request, res: Response, next: NextFunction) => {
	const headers = req.headers
	const authorization = headers.authorization

	if (authorization && authorization.split(" ").length) {
		const accessToken = authorization.split(" ")[1]

		validateAccessToken(accessToken)
			.then(
				payload => {
					res.locals._id = payload._id
					res.locals.nombre = payload.nombre
					res.locals.roles = ["OPERATOR"]
					next()
				},
				error => {
					res
						.status(error.status)
						.json(error)
				}
			)
	} else {
		res
			.status(500)
			.json({
				status: 500,
				message: "User not logged"
			})
	}
}

export { authenticacion }