const Sequelize = require('sequelize')

const sequelize = new Sequelize('projetoperguntas', 'root', '1234', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
});


// Exportando conexão
module.exports = sequelize;