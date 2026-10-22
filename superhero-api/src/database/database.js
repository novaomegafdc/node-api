const {Sequelize, Model} = require("sequelize")
const { Database } = require("sqlite")

const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: "./Database.sqlite",
    logging: false
});

module.exports = sequelize;