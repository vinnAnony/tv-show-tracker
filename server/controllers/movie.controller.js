const db = require("../models");
const Movie = db.movies;
const Op = db.Sequelize.Op;
const {body, validationResult} = require('express-validator');
const sequelize = require("../config/database");
const Genre = require("../models/genre.model.js")(sequelize, db.Sequelize);
const MovieActor = require("../models/movie_actors.model")(sequelize, db.Sequelize);
const Actor = require("../models/actor.model")(sequelize, db.Sequelize);
const Comment = require("../models/comment.model.js")(sequelize, db.Sequelize);
const Rating = require("../models/rating.model")(sequelize, db.Sequelize);
const User = require("../models/user.model")(sequelize, db.Sequelize);
const Subscription = require("../models/subscription.model")(sequelize, db.Sequelize);

const sendNotification = require('../config/notification.config');

exports.create = [
    body('movie_name').isLength({min: 1}).withMessage('Movie name required'),
    body('genre_id').isLength({min: 1}).withMessage('Genre required'),
    body('movie_type_id').isLength({min: 1}).withMessage('Movie type required'),
    body('description').isLength({min: 20}).withMessage('Description is too short'),
    body('rating').isNumeric().withMessage('Rating must be a numeric'),
    body('poster_url').isLength({min:1}).withMessage('Poster image required'),
    (req, res) => {

    const errors = validationResult(req);
    console.log(errors);
    if (!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()});
    }

    const movie = {
        movie_name: req.body.movie_name,
        genre_id: req.body.genre_id,
        movie_type_id: req.body.movie_type_id,
        description: req.body.description,
        rating: req.body.rating,
        poster_url: req.body.poster_url,
    };
    let addedMovieGenreId=0;
    let addedMovieName='';
    Movie.create(movie)
        .then(data => {
            addedMovieGenreId = data.genre_id;
            addedMovieName = data.movie_name;
            res.status(200).json({
                success: true, message: 'movie added', movie: data
            })
        }).then(() => {
            notifySubscribers(addedMovieGenreId,addedMovieName);

    })
        .catch(err => {
            console.log(err.message)
        });
}];

function notifySubscribers(genreId,movieName) {
    let users = {};
    Subscription.findAll({
        where: {genre_id: genreId},
        include: [
            {
                model: User,
            },
        ],
        raw:true,
    }).then(data => {
        if (data) {
            users = data;
        } else {
            //no users
        }
    }).then(() =>{
        for (const user of users) {
            console.log(user['user.email']);
            sendNotification({
                email: user['user.email'],
                subject: "New Movie Released 🔥",
                body: `Hey ya! ${movieName} is now out of the box.`
            });
        }
        //notification sent
    })
        .catch(err => {
            console.log(err.message);
        });
}

exports.findAll = (req, res) => {

    Movie.findAll(
        {
            include:[
                {model: Genre, required: true},
                {
                    model: MovieActor,
                    include: [
                        {
                            model: Actor,
                        },
                    ]
                },
                ]
        }
    )
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving movies."
            });
        });
};

exports.findOne = (req, res) => {
    const id = req.params.id;

    Movie.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find Movie with id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving movie with id=" + id
            });
        });
};

exports.fetchMovieDetails = (req, res) => {
    const id = req.params.id;

    Movie.findAll({
        where: {
            id:id
        },
        include:[
            {model: Genre},
            {model: Comment,
                include: [
                    {
                        model: User,
                    },
                ]
            },
            {model: Rating},
            {
                model: MovieActor,
                include: [
                    {
                        model: Actor,
                    },
                ]
            },
        ]
    })
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    success: false,
                    message: `Cannot find Movie with id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving movie with => " + err.message
            });
        });
};
exports.fetchGenreMovieDetails = (req, res) => {
    const id = req.params.id;

    Movie.findAll({
        where: {
            genre_id:id
        },
        include:[
            {model: Genre},
            {model: Comment,
                include: [
                    {
                        model: User,
                    },
                ]
            },
            {model: Rating},
            {
                model: MovieActor,
                include: [
                    {
                        model: Actor,
                    },
                ]
            },
        ]
    })
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    success: false,
                    message: `Cannot find Movie with id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving movie with => " + err.message
            });
        });
};

exports.update = (req, res) => {
    const id = req.params.id;

    Movie.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    success: true,
                    message: "Movie was updated successfully."
                });
            } else {
                res.send({
                    success: false,
                    message: `Cannot update Movie with id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Movie with id=" + id
            });
        });
};

exports.delete = (req, res) => {
    const id = req.params.id;

    Movie.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    success: true,
                    message: "Movie deleted successfully!"
                });
            } else {
                res.send({
                    success: false,
                    message: `Cannot delete movie with id=${id}. Maybe movie was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete movie with id=" + id
            });
        });
};

exports.searchMovie = (req, res) => {

    const keyword = req.query.keyword;

    Movie.findAll(
        {
            where: { 'movie_name': { [Op.like]: '%' + keyword + '%' }
            },
            include:[
                {model: Genre},
                {model: Comment,
                    include: [
                        {
                            model: User,
                        },
                    ]
                },
                {model: Rating},
                {
                    model: MovieActor,
                    include: [
                        {
                            model: Actor,
                        },
                    ]
                },
            ]
        }
    )
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving movies."
            });
        });
};