const express = require('express');
const cors = require("cors");
const app = express();
const port = 4400;
app.use(express.json());
app.use(cors());

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const db = require("./models");
db.sequelize.sync();

// db.sequelize.sync({ force: true }).then(() => {
//     console.log("Drop and re-sync db.");
// });


app.listen(process.env.PORT || port, function() {
    console.log(`My app is listening on port ${port}!`)
});


//Express router
const auth = require('./api/auth/users');
const movies = require('./api/movies');
const subscriptions = require('./api/subscriptions');
const favourites = require('./api/favourites');
const actors = require('./api/actors');

app.use('/api/auth', auth);
app.use('/api', movies);
app.use('/api', subscriptions);
app.use('/api', favourites);
app.use('/api', actors);
