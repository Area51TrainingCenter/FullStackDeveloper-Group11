import { Request, Response, NextFunction } from "express"
import { IError } from "../../interfaces/ierror.interface";

const authorization = (...rolesAllowed) => {
	const rolUser: string = "ADMIN"

	return (req: Request, res: Response, next: NextFunction) => {
		if (rolesAllowed.indexOf(rolUser) >= 0) {
			return next()
		}

		const err: IError = new Error("Rol not allowed")
		err.status = 409
		next(err)
	}
}

export { authorization }