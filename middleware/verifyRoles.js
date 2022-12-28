const verifyRoles = function (...allowedRoles) {

	return function (req, res, next) {

		if (!req.roles) return res.sendStatus(401)

		const rolesArray = [...allowedRoles]
		console.log(rolesArray)
		console.log(res.roles)

		const result = req.roles.map(role => allowedRoles.includes(role)).find(val => val == true)

		if (!result) return res.sendStatus(401)

		next()

	}
}

module.exports = verifyRoles