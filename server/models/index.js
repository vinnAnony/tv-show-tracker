const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,

});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.movies = require("./movie.model.js")(sequelize, Sequelize);
db.users = require("./user.model.js")(sequelize, Sequelize);
db.subscriptions = require("./subscription.model.js")(sequelize, Sequelize);
db.favourites = require("./favourite.model.js")(sequelize, Sequelize);
db.actors = require("./actor.model.js")(sequelize, Sequelize);
db.genres = require("./genre.model.js")(sequelize, Sequelize);
db.comments = require("./comment.model.js")(sequelize, Sequelize);
db.ratings = require("./rating.model.js")(sequelize, Sequelize);
db.movie_actors = require("./movie_actors.model.js")(sequelize, Sequelize);

module.exports = db;