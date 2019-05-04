import { Request, Response } from "express"
export class Generic {
	model: any

	constructor(model: any) {
		this.model = model
		this.list = this.list.bind(this)
		this.insert = this.insert.bind(this)
		this.update = this.update.bind(this)
		this.delete = this.delete.bind(this)
	}

	async list(req: Request, res: Response) {
		const results = await this.model.find()

		res.json({
			status: 200,
			message: "list",
			results
		})
	}

	async insert(req: Request, res: Response) {
		const data = req.body

		const documento = new this.model(data)
		await documento.save()

		res
			.status(201)
			.json({
				status: 201,
				message: "document inserted",
				result: documento
			})
	}

	async update(req: Request, res: Response) {
		const data = req.body
		const _id = req.params._id

		await this.model.findOneAndUpdate({ _id }, data)

		res
			.json({
				status: 200,
				message: "document updated"
			})
	}

	async delete(req: Request, res: Response) {
		const _id = req.params._id

		await this.model.findOneAndRemove({ _id })

		res
			.json({
				status: 200,
				message: "document deleted"
			})
	}
}