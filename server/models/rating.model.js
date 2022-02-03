const { Sequelize, DataTypes, Model } = require('sequelize');

module.exports = (sequelize) => {
    const Movie = sequelize.define("movie", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        movie_name: {
            type: DataTypes.STRING
        },
        genre_id: {
            type: DataTypes.INTEGER
        },
        movie_type_id: {
            type: DataTypes.INTEGER
        },
        description: {
            type: DataTypes.STRING
        },
        rating: {
            type: DataTypes.FLOAT
        },
        poster_url: {
            type: DataTypes.STRING
        }
    });

    return Movie;
};