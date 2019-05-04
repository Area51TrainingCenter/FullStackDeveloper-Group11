import { Request, Response, NextFunction } from "express"
import { IError } from "../../interfaces/ierror.interface";

const authorization = (...rolesAllowed) => {

	return (req: Request, res: Response, next: NextFunction) => {
		const rolesUser = res.locals.roles

		let found = false

		rolesUser.forEach(rol => {
			if (rolesAllowed.indexOf(rol) >= 0) {
				found = true
			}
		})

		if (found) return next()

		const err: IError = new Error("Rol not allowed")
		err.status = 409
		next(err)
	}
}

export { authorization }