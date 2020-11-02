const Sequelize = require('sequelize');

const connection = new Sequelize('Seu_Banco_de_Dados', 'Seu_Usuário', 'Sua_Senha', {
	host: 'localhost',
	dialect: 'mysql'
});

module.exports = connection;