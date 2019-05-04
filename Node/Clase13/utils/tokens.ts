import jwt = require("jwt-simple")
import randToken = require("rand-token")
import moment = require("moment")

const createAccessToken = (_id: string, nombre: string) => {
	const payload = {
		_id,
		nombre,
		iat: moment().unix(),
		exp: moment().add(100, "seconds").unix()
	}

	const accessToken = jwt.encode(payload, process.env.PALABRA_SECRETA)

	return accessToken
}

const createRefreshToken = () => {
	const refreshToken = randToken.uid(256)

	return refreshToken
}

const validateAccessToken = (accessToken: string): Promise<any> => {
	const promesa = new Promise((resolve, reject) => {
		try {
			const payload = jwt.decode(accessToken, process.env.PALABRA_SECRETA)

			resolve(payload)
		} catch (error) {
			if (error.message.toLowerCase() == "token expired") {
				reject({
					status: 401,
					message: "Token expired"
				})
			} else {
				reject({
					status: 500,
					message: "Token invalid"
				})
			}
		}
	})

	return promesa
}

export { createAccessToken, createRefreshToken, validateAccessToken }