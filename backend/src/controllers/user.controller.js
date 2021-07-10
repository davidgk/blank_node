

const list = async(req, res) => {
	res.send( [
		{id:1 , name: 'pepe', email:'argento@gmail.com'},
		{id:2 , name: 'mony', email:'mony@gmail.com'}
	]);
	res.status = 200
}


module.exports = {list}
