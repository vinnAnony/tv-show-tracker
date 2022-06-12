const express = require('express');
const router = express.Router();

const moviesController = require("../controllers/movie.controller");
const movieActorController = require("../controllers/movie_actor.controller");

router.route('/movies')
    .post(moviesController.create)

    .get(moviesController.findAll);

router.route('/movies/:id')

    .get(moviesController.findOne)

    .put(moviesController.update)

    .delete(moviesController.delete);

router.route('/movies-details/:id')
    .get(moviesController.fetchMovieDetails);

router.route('/genre-movies/:id')
    .get(moviesController.fetchGenreMovieDetails);

router.route('/movie-search/')
    .get(moviesController.searchMovie);

router.route('/add-actor-to-movie/')
    .post(movieActorController.create);


module.exports = router;