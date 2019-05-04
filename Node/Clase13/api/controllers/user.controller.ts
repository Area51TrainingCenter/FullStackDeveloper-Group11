import { Generic } from "./generic.controller";
import User from "../models/user.model";
import { Request, Response } from "express"

export class UserController extends Generic {
	constructor() {
		super(User)
	}

	/* async list(req: Request, res: Response) {
		const results = await User.find().populate("roles")

		res.json({
			status: 200,
			message: "list",
			results
		})
	} */
}