const { User } = require('../../config/dbConfig');


const create = async(req, res) => {
	console.log(req)
	const body = req.body;
	res.send((await User.create(body)).dataValues);
};

const list = async(req, res) => {
	res.send( await User.findAll());
};


module.exports = {list, create}
