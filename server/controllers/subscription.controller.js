const db = require("../models");
const Subscription = db.subscriptions;
const Op = db.Sequelize.Op;
const {body, validationResult} = require('express-validator');
const sequelize = require("../config/database");
const Movie = require("../models/movie.model.js")(sequelize, db.Sequelize);
const User = require("../models/user.model.js")(sequelize, db.Sequelize);


exports.create = [
    body('genre_id').isLength({min: 1}).withMessage('Genre required'),
    body('user_id').isLength({min: 1}).withMessage('User required'),
    (req, res) => {

    const errors = validationResult(req);
    console.log(errors);
    if (!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()});
    }

    const movie = {
        genre_id: req.body.genre_id,
        user_id: req.body.user_id,
    };

    Subscription.create(movie)
        .then(data => {
            res.status(200).json({
                success: true, message: 'Successfully subscribed', movie: data
            })
        })
        .catch(err => {
            console.log(err.message)
        });
}];

exports.findAll = (req, res) => {

    Subscription.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving subscriptions."
            });
        });
};

exports.findUserSubscriptions = (req, res) => {
    const id = req.params.id;

    Subscription.findAll({
        where: { user_id: id },

    })
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find subscription.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving subscription =>" +err.message
            });
        });
};

exports.findGenreSubscriptions = (req, res) => {
    const id = req.params.id;

    Subscription.findAll({
        where: { genre_id: id }
    })
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find subscription.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving subscription"
            });
        });
};

exports.update = (req, res) => {
    const id = req.params.id;

    Subscription.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Subscription was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update subscription with id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating subscription with id=" + id
            });
        });
};

exports.delete = (req, res) => {
    const id = req.params.id;

    Subscription.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    success: true,
                    message: "Successfully unsubscribed!"
                });
            } else {
                res.send({
                    message: `Cannot delete subscription with id=${id}. Maybe subscription was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete subscription => " + err.message
            });
        });
};


exports.dashboardSummary = async (req, res) => {

    const movies = await sequelize.query('SELECT COUNT(id) AS countVal FROM movies', {
        model: Movie,
        mapToModel: true
    });
    const subscriptions = await sequelize.query('SELECT COUNT(id) AS countVal FROM subscriptions', {
        model: Subscription,
        mapToModel: true
    });
    const users = await sequelize.query('SELECT COUNT(id) AS countVal FROM users', {
        model: User,
        mapToModel: true
    });
    res.send({
        dashData:{
            movies_count:movies[0],
            subscriptions_count:subscriptions[0],
            users_count:users[0],
        }
    });
};