const { Sequelize, DataTypes, Model } = require('sequelize');

module.exports = (sequelize) => {
    const Favourite = sequelize.define("favourite", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        movie_id: {
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

    return Favourite;
};