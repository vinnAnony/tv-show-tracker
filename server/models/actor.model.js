const { Sequelize, DataTypes, Model } = require('sequelize');

const sequelize = require("../config/database");
//const MovieActor = require("../models/movie_actors.model")(sequelize, Sequelize);

module.exports = (sequelize) => {
    const Actor = sequelize.define("actor", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        actor_name: {
            type: DataTypes.STRING
        },
        profile_url: {
            type: DataTypes.STRING(600),
        }
    });

    // Actor.hasMany(MovieActor, {foreignKey:'actor_id'});
    // MovieActor.belongsTo(Actor);
    return Actor;
};