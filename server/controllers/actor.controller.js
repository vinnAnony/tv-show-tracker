const db = require("../models");
const Actor = db.actors;
const Op = db.Sequelize.Op;
const {body, validationResult} = require('express-validator');


exports.create = [
    body('actor_name').isLength({min: 1}).withMessage('Actor required'),
    body('profile_url').isLength({min: 1}).withMessage('Profile image required'),
    (req, res) => {

    const errors = validationResult(req);
    console.log(errors);
    if (!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()});
    }

    const actor = {
        actor_name: req.body.actor_name,
        movie_id: req.body.movie_id,
        profile_url: req.body.profile_url,
    };

    Actor.create(actor)
        .then(data => {
            res.status(200).json({
                success: true, message: 'Actor added', movie: data
            })
        })
        .catch(err => {
            console.log(err.message)
        });
}];

exports.findOne = (req, res) => {
    const id = req.params.id;

    Actor.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find actor with id ${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving actor with id=" + id
            });
        });
};

exports.findAll = (req, res) => {

    Actor.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving actors."
            });
        });
};

exports.update = (req, res) => {
    const id = req.params.id;

    Actor.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Actor was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update actor with id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating actor with id=" + id
            });
        });
};

exports.delete = (req, res) => {
    const id = req.params.id;

    Actor.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Actor deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete actor with id=${id}. Maybe actor was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete actor => " + err.message
            });
        });
};

