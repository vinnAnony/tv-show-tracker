const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = new Sequelize('movie_shower', 'homestead', 'secret', {
    host: '192.168.56.56',
    dialect: 'mysql',

});

module.exports = sequelize;