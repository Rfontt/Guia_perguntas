const Sequelize = require('sequelize');
const connection = require('../database');

const Questions = connection.define('Questions', {
	title: {
		type: Sequelize.STRING,
		allowNull: false
	},
	
	description: {
		type: Sequelize.TEXT,
		allowNull: false
	}
});

Questions.sync({ force: false }).then(()=> {});

module.exports = Questions;