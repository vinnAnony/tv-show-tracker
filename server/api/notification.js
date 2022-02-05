const express = require('express');
const router = express.Router();

const notificationsController = require("../controllers/notification.controller");


router.route('/send-notification/')
    .get(notificationsController.sendNotificationToAllSubscribers);


module.exports = router