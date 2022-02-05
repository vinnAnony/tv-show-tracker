const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require("../config/database");
const User = require("../models/user.model.js")(sequelize, Sequelize);
//const Movie = require("../models/movie.model.js")(sequelize, Sequelize);

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

    Rating.belongsTo(User, {foreignKey:'user_id'});
    //Rating.belongsTo(Movie, {foreignKey:'movie_id'});
    return Rating;
};