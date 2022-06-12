const db = require("../models");
const MovieActor = db.movie_actors;
const Op = db.Sequelize.Op;
const {body, validationResult} = require('express-validator');

exports.create = [
    body('movie_id').isLength({min: 1}).withMessage('Movie id required'),
    body('actor_id').isLength({min: 1}).withMessage('Actor id required'),
    (req, res) => {

        const errors = validationResult(req);
        console.log(errors);
        if (!errors.isEmpty()) {
            return res.status(400).json({errors: errors.array()});
        }

        const movie_actor = {
            movie_id: req.body.movie_id,
            actor_id: req.body.actor_id,
        };

        MovieActor.create(movie_actor)
            .then(data => {
                res.status(200).json({
                    success: true, message: 'Actor added to movie', movie: data
                })
            })
            .catch(err => {
                console.log(err.message)
            });
    }];