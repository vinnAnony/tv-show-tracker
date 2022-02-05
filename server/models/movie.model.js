const { Sequelize, DataTypes, Model } = require('sequelize');

const sequelize = require("../config/database");
const Genre = require("../models/genre.model.js")(sequelize, Sequelize);
const Comment = require("../models/comment.model")(sequelize, Sequelize);
const Rating = require("../models/rating.model")(sequelize, Sequelize);

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
            type: DataTypes.STRING(600),
        }
    });

    Movie.belongsTo(Genre, {foreignKey:'genre_id'});
    Movie.hasMany(Comment, {foreignKey:'movie_id'});
    Movie.hasMany(Rating, {foreignKey:'movie_id'});
    //Movie.hasMany(Actor, {foreignKey:'genre_id'});

    return Movie;
};