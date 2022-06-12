const db = require("../models");
const Comment = db.comments;
const Op = db.Sequelize.Op;
const {body, validationResult} = require('express-validator');


exports.create = [
    body('movie_id').isLength({min: 1}).withMessage('Movie required'),
    body('user_id').isLength({min: 1}).withMessage('User required'),
    body('comment').isLength({min: 1}).withMessage('Comment required'),
    (req, res) => {

    const errors = validationResult(req);
    console.log(errors);
    if (!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()});
    }

    const comment = {
        movie_id: req.body.movie_id,
        user_id: req.body.user_id,
        comment: req.body.comment,
    };

    Comment.create(comment)
        .then(data => {
            res.status(200).json({
                success: true, message: 'Comment added', movie: data
            })
        })
        .catch(err => {
            console.log(err.message)
        });
}];

exports.findAll = (req, res) => {

    Comment.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving comments."
            });
        });
};

exports.findOne = (req, res) => {
    const id = req.params.id;

    Comment.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find comment with id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving comment with id=" + id
            });
        });
};

exports.update = (req, res) => {
    const id = req.params.id;

    Comment.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Comment was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update comment with id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating comment with id=" + id
            });
        });
};

exports.delete = (req, res) => {
    const id = req.params.id;

    Comment.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Comment deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete comment with id=${id}. Maybe comment was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete comment => " + err.message
            });
        });
};

