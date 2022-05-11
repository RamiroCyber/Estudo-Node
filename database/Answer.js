const Sequelize = require('sequelize');
const connection = require('./db');

const Answer = connection.define('answer', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },

    body: {
        type: Sequelize.TEXT,
        allowNull: false,
    },

    questionId: {
        type: Sequelize.INTEGER,
        allowNull: false
    }

});

Answer.sync({force: false})

module.exports = Answer;