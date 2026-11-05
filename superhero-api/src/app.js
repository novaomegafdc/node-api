const express = require('express');
const sequelize = require("./database/database.js");

const Hero = require("./models/Hero.js");
const Movie = require("./models/Movies.js");
const heroesRoutes = require("./routes/Heros.routes.js")

const app = express();
app.use(express.json());

Hero.belongsToMany(Movie, {
    through: "HeroMovies"
})

Movie.belongsToMany(Hero, {
    through:"MovieHero"
})

app.use("/heroes", heroesRoutes);

sequelize.sync()
    .then(() => {
        console.log("Banco de Dados sicronizado.")
})

    .catch((error) =>{
        console.error("Erro a sicronizar o Banco", error)
}
)
module.exports = app;