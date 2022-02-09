const db = require("../models");
const Genre = db.genres;
const Op = db.Sequelize.Op;
const {body, validationResult} = require('express-validator');
const sequelize = require("../config/database");
const Subscription = require("../models/subscription.model.js")(sequelize, db.Sequelize);
const Movie = require("../models/movie.model")(sequelize, db.Sequelize);

exports.create = [
    body('genre_name').isLength({min: 1}).withMessage('Genre name required'),
    (req, res) => {

    const errors = validationResult(req);
    console.log(errors);
    if (!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()});
    }

    const genre = {
        genre_name: req.body.genre_name,
    };

    Genre.create(genre)
        .then(data => {
            res.status(200).json({
                success: true, message: 'Genre added', movie: data
            })
        })
        .catch(err => {
            console.log(err.message)
        });
}];

exports.findAll = (req, res) => {

    Genre.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving genres."
            });
        });
};

exports.findAllGenreSubscriptions = (req, res) => {

    Genre.findAll({
            include: [
                {model: Subscription},
            ],
        }
    )
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving genres."
            });
        });
};

exports.findOne = (req, res) => {
    const id = req.params.id;

    Genre.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find genre with id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving genre with id=" + id
            });
        });
};

exports.update = (req, res) => {
    const id = req.params.id;

    Genre.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Genre was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update genre with id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating genre with id=" + id
            });
        });
};

exports.delete = (req, res) => {
    const id = req.params.id;

    Genre.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Genre deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete genre with id=${id}. Maybe genre was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete genre => " + err.message
            });
        });
};

