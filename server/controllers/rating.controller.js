const db = require("../models");
const Rating = db.ratings;
const Op = db.Sequelize.Op;
const {body, validationResult} = require('express-validator');


exports.create = [
    body('movie_id').isLength({min: 1}).withMessage('Movie id required'),
    body('rating').isLength({min: 1}).withMessage('rating required'),
    body('user_id').isLength({min: 1}).withMessage('User id required'),
    (req, res) => {

    const errors = validationResult(req);
    console.log(errors);
    if (!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()});
    }

    const rating = {
        movie_id: req.body.movie_id,
        rating: req.body.rating,
        user_id: req.body.user_id,
    };

    Rating.create(rating)
        .then(data => {
            res.status(200).json({
                success: true, message: 'Rating added', rating: data
            })
        })
        .catch(err => {
            console.log(err.message)
        });
}];

exports.findAll = (req, res) => {

    Rating.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving ratings."
            });
        });
};

exports.findOne = (req, res) => {
    const id = req.params.id;

    Rating.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find rating with id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving rating with id=" + id
            });
        });
};

exports.update = (req, res) => {
    const id = req.params.id;

    Rating.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Rating was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Rating with id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Rating with id=" + id
            });
        });
};

exports.delete = (req, res) => {
    const id = req.params.id;

    Rating.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Rating deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete rating with id=${id}. Maybe rating was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete rating with id=" + id
            });
        });
};

