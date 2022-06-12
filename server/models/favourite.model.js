const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require("../config/database");
const User = require("../models/user.model.js")(sequelize, Sequelize);
const Movie = require("../models/movie.model.js")(sequelize, Sequelize);

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

    Favourite.belongsTo(User, {foreignKey:'user_id'});
    Favourite.belongsTo(Movie, {foreignKey:'movie_id'});

    return Favourite;
};