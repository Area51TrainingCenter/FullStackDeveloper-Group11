import { Generic } from "./generic.controller";
import User from "../models/user.model";
import { Request, Response } from "express"
import { createRefreshToken } from "../../utils/tokens";

export class UserController extends Generic {
	constructor() {
		super(User)
	}

	async insert(req: Request, res: Response) {
		const data = req.body
		data.refreshToken = createRefreshToken()

		const documento = new User(data)
		await documento.save()

		res
			.status(201)
			.json({
				status: 201,
				message: "document inserted",
				result: documento
			})
	}
}