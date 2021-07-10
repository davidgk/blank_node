const { sequelize } = require('../config/dbConfig');
beforeEach(async function () {
		await sequelize.sync()
		let sql = 'TRUNCATE ';
		for (const model in sequelize.models) {
			// for every table name, append that name to truncate command
			sql += '"' + sequelize.modenpmls[model].getTableName() + '",';
		}
		sql = sql.substr(0, sql.length - 1); // remove trailing comma
		sql += ' CASCADE';
		await sequelize.query(sql);
});
