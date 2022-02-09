const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require("../config/database");
const Subscription = require("../models/subscription.model.js")(sequelize, Sequelize);
module.exports = (sequelize) => {
    const Genre = sequelize.define("genre", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        genre_name: {
            type: DataTypes.STRING
        },
    });


    Genre.hasMany(Subscription, {foreignKey:'genre_id'});
    return Genre;
};