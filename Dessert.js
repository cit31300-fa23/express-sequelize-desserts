const { Model, DataTypes } = require('sequelize');
const sequelize = require('./database');

class Dessert extends Model {};

// Initialize the table with two columns
Dessert.init({
    name: {
        type: DataTypes.STRING
    },
    description: {
        type: DataTypes.STRING
    }
}, {
    sequelize,
    modelName: 'desserts'
});

module.exports = Dessert;