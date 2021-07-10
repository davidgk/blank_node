const express = require("express");
const bodyParser = require("body-parser");
const {loadRoutes} = require("./config/routes");
const PORT = process.env.PORT || 4000;
console.log('PORT:'+ PORT)
const app = express();
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
const load = () => app.listen(PORT, err => {
	if (err) {
		console.log('err: ' + err.message);
		return err;
	}
	console.log(`Blank app running on http://localhost:${PORT}`);
});
load();

loadRoutes(app)

module.exports = {load, app}
