const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require("../config/database");
const User = require("../models/user.model.js")(sequelize, Sequelize);

module.exports = (sequelize) => {
    const Subscription = sequelize.define("subscription", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        genre_id: {
            type: DataTypes.INTEGER
        },
        user_id: {
            type: DataTypes.INTEGER
        },
        status: {
            type: DataTypes.INTEGER,
            defaultValue: 1,
        },
    },{
        paranoid: true
    });

    Subscription.belongsTo(User, {foreignKey:'user_id'});
    return Subscription;
};