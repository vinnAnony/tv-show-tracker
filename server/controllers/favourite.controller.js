const db = require("../models");
const Favourite = db.favourites;
const Op = db.Sequelize.Op;
const {body, validationResult} = require('express-validator');


exports.create = [
    body('movie_id').isLength({min: 1}).withMessage('Movie required'),
    body('user_id').isLength({min: 1}).withMessage('User required'),
    (req, res) => {

    const errors = validationResult(req);
    console.log(errors);
    if (!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()});
    }

    const favourite = {
        movie_id: req.body.movie_id,
        user_id: req.body.user_id,
    };

    Favourite.create(favourite)
        .then(data => {
            res.status(200).json({
                success: true, message: 'Favourite added', movie: data
            })
        })
        .catch(err => {
            console.log(err.message)
        });
}];

exports.findAll = (req, res) => {

    Favourite.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving favourites."
            });
        });
};

exports.findUserFavourites = (req, res) => {
    const id = req.params.id;

    Favourite.findAll({
        where: { user_id: id }
    })
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find favourite.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving favourite"
            });
        });
};

exports.findMovieFavourites = (req, res) => {
    const id = req.params.id;

    Favourite.findAll({
        where: { movie_id: id }
    })
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find favourite.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving favourite"
            });
        });
};

exports.update = (req, res) => {
    const id = req.params.id;

    Favourite.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Favourite was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update favourite with id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating favourite with id=" + id
            });
        });
};

exports.delete = (req, res) => {
    const id = req.params.id;

    Favourite.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Favourite deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete favourite with id=${id}. Maybe favourite was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete favourite => " + err.message
            });
        });
};

