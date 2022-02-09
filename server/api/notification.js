const express = require('express');
const router = express.Router();

const notificationsController = require("../controllers/notification.controller");


router.route('/send-notification/')
    .post(notificationsController.sendNotificationToAllSubscribers);
router.route('/send-subscribers-notification/')
    .post(notificationsController.sendNotificationToSpecificSubscribers);


module.exports = router