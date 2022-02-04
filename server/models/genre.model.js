const { Sequelize, DataTypes, Model } = require('sequelize');

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

    return Genre;
};