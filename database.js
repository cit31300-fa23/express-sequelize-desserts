const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('dessert-db', '', '', {
    dialect: 'sqlite',
    host: './desserts.sqlite'
});

module.exports = sequelize;