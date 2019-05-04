import { Request, Response, NextFunction } from "express"
import { IError } from "../interfaces/ierror.interface";

const notFound = (req: Request, res: Response, next: NextFunction) => {
	const err: IError = new Error("Path not found")
	err.status = 404

	next(err)

	//res.status(404).send("Not Found")
}

const general = (err: IError, req: Request, res: Response, next: NextFunction) => {
	res
		.status(err.status)
		.json({
			name: err.name,
			status: err.status,
			message: err.message,
			stack: err.stack
		})
}

export { notFound, general }