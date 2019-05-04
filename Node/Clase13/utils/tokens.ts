import jwt = require("jwt-simple")
import randToken = require("rand-token")
import moment = require("moment")

const palabraSecreta = "ElMundo3sAnch0YAjenosegunCiroaleGria"

const createAccessToken = (_id: string, nombre: string) => {
	const payload = {
		_id,
		nombre,
		iat: moment().unix(),
		exp: moment().add(45, "seconds").unix()
	}

	const accessToken = jwt.encode(payload, palabraSecreta)

	return accessToken
}

const createRefreshToken = () => {
	const refreshToken = randToken.uid(256)

	return refreshToken
}

const validateAccessToken = (accessToken: string): Promise<any> => {
	const promesa = new Promise((resolve, reject) => {
		try {
			const payload = jwt.decode(accessToken, palabraSecreta)

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