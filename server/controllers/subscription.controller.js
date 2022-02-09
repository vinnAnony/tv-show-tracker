const db = require("../models");
const Subscription = db.subscriptions;
const Op = db.Sequelize.Op;
const {body, validationResult} = require('express-validator');


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
                success: true, message: 'subscription added', movie: data
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
        where: { user_id: id }
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
                    message: "Subscription deleted successfully!"
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

