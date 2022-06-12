const { Sequelize, DataTypes, Model } = require('sequelize');

module.exports = (sequelize) => {
    const User = sequelize.define("user", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        user_name: {
            type: DataTypes.STRING,
            unique: true
        },
        full_name: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING,
            unique: true
        },
        role_id: {
            type: DataTypes.FLOAT,
            defaultValue: 1,
        },
        password: {
            type: DataTypes.STRING
        }
    },{
        paranoid: true
    });

    return User;
};