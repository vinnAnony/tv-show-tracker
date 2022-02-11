const sequelize = require("../config/database");
const Actor = require("../models/actor.model")(sequelize, Sequelize);
const Comment = require("../models/comment.model")(sequelize, Sequelize);
const Favourite = require("../models/favourite.model")(sequelize, Sequelize);
const Genre = require("../models/genre.model.js")(sequelize, Sequelize);
const Movie = require("../models/movie.model")(sequelize, Sequelize);
const MovieActors = require("../models/movie_actors.model")(sequelize, Sequelize);
const Rating = require("../models/rating.model")(sequelize, Sequelize);
const Subscription = require("../models/subscription.model")(sequelize, Sequelize);
const User = require("../models/user.model")(sequelize, Sequelize);