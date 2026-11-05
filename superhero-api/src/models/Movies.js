const {DataTypes} = require("sequelize")

const sequelize = require("../database/database")

const Movie = sequelize.define("Movie", {
    id: {
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    tittle: {
        type: DataTypes.STRING,
        allowNull: false
    },
    year: {
        type:DataTypes.INTEGER,
        allowNull:false
    }
});

module.exports = Movie;