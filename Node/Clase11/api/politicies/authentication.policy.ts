import { Request, Response, NextFunction } from "express";

const authenticacion = (req: Request, res: Response, next: NextFunction) => {
	next()
}

export { authenticacion }