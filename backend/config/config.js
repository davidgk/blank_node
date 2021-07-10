require('dotenv').config();
const { DB_HOST, DB_USERNAME, DB_PASSWORD, DB_NAME , DB_PORT} = process.env;

const configDB = {
	development: {
		dialect: "postgres",
		username: DB_USERNAME,
		password: DB_PASSWORD,
		database: `${DB_NAME}_dev`,
		host: DB_HOST,
		define: { paranoid: true, underscored: true },
		port: DB_PORT
	},
	test: {
		dialect: "postgres",
		username: DB_USERNAME,
		password: DB_PASSWORD,
		database: `${DB_NAME}_test`,
		host: DB_HOST,
		port: DB_PORT,
		define: { paranoid: true, underscored: true }
	},
	production: {
		dialect: "postgres",
		username: DB_USERNAME,
		password: DB_PASSWORD,
		database: `${DB_NAME}_prod`,
		host: DB_HOST,
		port: DB_PORT,
		define: { paranoid: true, underscored: true }

	}
};
module.exports = configDB
