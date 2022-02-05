const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require("../config/database");
const User = require("../models/user.model.js")(sequelize, Sequelize);
//const Movie = require("../models/movie.model")(sequelize, Sequelize);

module.exports = (sequelize) => {
    const Comment = sequelize.define("comment", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        user_id: {
            type: DataTypes.INTEGER
        },
        movie_id: {
            type: DataTypes.INTEGER
        },
        comment: {
            type: DataTypes.STRING
        },
    });

    Comment.belongsTo(User, {foreignKey:'user_id'});
    //Comment.belongsTo(Movie, {foreignKey:'movie_id'});

    return Comment;
};