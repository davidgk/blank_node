'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'test';
const config = require(__dirname + '/config.js')[env];
console.log( 'ENVIRONMENT:' + env )
console.log( 'DB POINTING OUT:' + config.database )
const models = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

sequelize
	.authenticate()
	.then(function(err) {
		console.log('Connection has been established successfully.');
	}, function (err) {
		console.log('Unable to connect to the database:', err);
	});

fs.readdirSync('./models')
	.filter(file => {
		return file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js';
	})
	.forEach(file => {
		// eslint-disable-next-line security/detect-non-literal-require
		const modelFile = require(path.join(__dirname + '/../models', file));
		const model = modelFile(sequelize, Sequelize.DataTypes);
		models[model.name] = model;
	});


Object.keys(models).forEach(modelName => {
  if (models[modelName].associate) {
	  models[modelName].associate(models);
  }
});

models.sequelize = sequelize;
models.Sequelize = Sequelize;

module.exports = models;
