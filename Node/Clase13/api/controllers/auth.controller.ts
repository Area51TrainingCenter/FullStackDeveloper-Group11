import { Request, Response } from "express"
import User from "../models/user.model";
import { createAccessToken, createRefreshToken } from "../../utils/tokens";

export class AuthController {

	async login(request: Request, response: Response) {
		const username = request.body.username.trim().toLowerCase()
		const contrasena = request.body.contrasena.trim()

		const user = await User.findOne({ username, contrasena })

		if (user) {
			const accessToken = createAccessToken(user._id, user.nombre)
			const refreshToken = createRefreshToken()

			response.json({ accessToken, refreshToken })
		} else {
			response
				.status(409)
				.json({
					status: 409,
					message: "Username or password incorrect"
				})
		}

	}

	async newAccessToken(request: Request, response: Response) {
		const refreshToken = request.body.refreshToken.trim()

		console.log(refreshToken)

		const user = await User.findOne({ refreshToken })

		if (user) {
			const accessToken = createAccessToken(user._id, user.nombre)

			response.json({
				status: 200,
				result: { accessToken }
			})
		} else {
			response
				.status(409)
				.json({
					status: 409,
					message: "Refresh token is invalid"
				})
		}
	}
}