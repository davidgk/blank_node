const usersControllers = require('../src/controllers/user.controller')

module.exports = {
	loadRoutes : (app) => {
		// USERS
		app.get('/users', usersControllers.list);
		app.post('/users', usersControllers.create);
	}
}
