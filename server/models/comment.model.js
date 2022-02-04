const { Sequelize, DataTypes, Model } = require('sequelize');

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

    return Comment;
};