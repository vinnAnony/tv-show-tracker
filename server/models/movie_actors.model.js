const { Sequelize, DataTypes, Model } = require('sequelize');

const sequelize = require("../config/database");
const Actor = require("../models/actor.model.js")(sequelize, Sequelize);
const Movie = require("../models/movie.model.js")(sequelize, Sequelize);

module.exports = (sequelize) => {
    const MovieActor = sequelize.define("movie_actor", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        actor_id: {
            type: DataTypes.INTEGER
        },
        movie_id: {
            type: DataTypes.INTEGER
        },
    });

    MovieActor.belongsTo(Actor, {foreignKey:'actor_id'});
    MovieActor.belongsTo(Movie, {foreignKey:'movie_id'});
    return MovieActor;
};