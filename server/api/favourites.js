const express = require('express');
const router = express.Router();

const favouritesController = require("../controllers/favourite.controller");

router.route('/favourites')
    .post(favouritesController.create)

    .get(favouritesController.findAll);

router.route('/favourites/:id')

    .put(favouritesController.update)

    .delete(favouritesController.delete);

router.route('/user-favourites/:id')
    .get(favouritesController.findUserFavourites);

router.route('/favourites-by-movie/:id')
    .get(favouritesController.findMovieFavourites);

//add search

module.exports = router;