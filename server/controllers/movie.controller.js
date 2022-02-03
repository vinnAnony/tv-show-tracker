const db = require("../models");
const Movie = db.movies;
const Op = db.Sequelize.Op;
const {body, validationResult} = require('express-validator');


exports.create = [
    body('movie_name').isLength({min: 1}).withMessage('Movie name required'),
    body('genre_id').isLength({min: 1}).withMessage('Genre required'),
    body('movie_type_id').isLength({min: 1}).withMessage('Movie type required'),
    body('description').isLength({min: 20}).withMessage('Name required'),
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

    Movie.create(movie)
        .then(data => {
            res.status(200).json({
                success: true, message: 'movie added', movie: data
            })
        })
        .catch(err => {
            console.log(err.message)
        });
}];

exports.findAll = (req, res) => {

    Movie.findAll()
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
                message: "Error retrieving Tutorial with id=" + id
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
                    message: "Movie was updated successfully."
                });
            } else {
                res.send({
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
                    message: "Movie deleted successfully!"
                });
            } else {
                res.send({
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

