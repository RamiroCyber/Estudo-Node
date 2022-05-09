const Sequelize = require('sequelize');
const connection = require('./db');

const Question = connection.define('question', {

    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.TEXT,
        allowNull: false
    }

});

Question.sync({
    force: false
}).then(() => {});