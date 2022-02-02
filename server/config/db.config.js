module.exports = {

    HOST: "192.168.56.56",
    PORT: 3306,
    USER: "homestead",
    PASSWORD: "secret",
    DB: "movie_shower",
    dialect: "mysql",

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};