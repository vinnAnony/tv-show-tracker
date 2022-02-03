const { Sequelize, DataTypes, Model } = require('sequelize');

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
        movie_id: {
            type: DataTypes.INTEGER
        },
        profile_url: {
            type: DataTypes.STRING,
            length: 600
        }
    });

    return Actor;
};