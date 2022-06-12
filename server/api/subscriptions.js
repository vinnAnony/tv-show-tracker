const express = require('express');
const router = express.Router();

const subscriptionsController = require("../controllers/subscription.controller");

router.route('/subscriptions')
    .post(subscriptionsController.create)

    .get(subscriptionsController.findAll);

router.route('/subscriptions/:id')

    .put(subscriptionsController.update)

    .delete(subscriptionsController.delete);

router.route('/user-subscriptions/:id')
    .get(subscriptionsController.findUserSubscriptions);

router.route('/subscriptions-by-genre/:id')
    .get(subscriptionsController.findGenreSubscriptions);

router.route('/dashboard-summary')
    .get(subscriptionsController.dashboardSummary);
//add search

module.exports = router