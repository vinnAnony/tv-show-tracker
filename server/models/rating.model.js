const { Sequelize, DataTypes, Model } = require('sequelize');

module.exports = (sequelize) => {
    const Rating = sequelize.define("user_rating", {
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
        rating: {
            type: DataTypes.FLOAT
        },
    });

    return Rating;
};