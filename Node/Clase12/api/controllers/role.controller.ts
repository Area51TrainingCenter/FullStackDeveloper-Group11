import { Generic } from "./generic.controller";
import Rol from "../models/role.model";
import { Request, Response } from "express"

export class RoleController extends Generic {
	constructor() {
		super(Rol)
	}

	async listPagination(req: Request, res: Response) {
		const page = req.params.page
		const sizePage = 2
		const results = await Rol.listPagination(page, sizePage)

		res
			.json({
				status: 200,
				message: "page",
				results
			})
	}
}