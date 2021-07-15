const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const Movies = require("./models/Movies");
const movies = require("./bin/seeds");

const app = express();
app.use(cors());
app.use(bodyParser.json());
const MONGODB_URI = "mongodb://localhost:27017/movies";

app.get("/getmoviesfromserver", (req, res) => {
  Movies.find().then((movies) => {
    res.json(movies);
    console.log(movies);
  });
});

mongoose
  .connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async (self) => {
    console.log(`Seeded the database: "${self.connection.name}"`);
    await Movies.deleteMany();
    await Movies.insertMany(movies).then((res) => console.log(res, "it works"));
  })
  .catch((error) => {
    console.error("Error connecting to the database", error);
  });

app.listen(process.env.PORT || 5000);
