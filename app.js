const express = require("express");
const app = express();
const port = 3000;
const morgan = require("morgan");
const mongoConnection = require("./database/connection");

require("dotenv").config();

app.use(morgan(process.env.NODE_ENV === "development" ? "dev" : "combined"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const userRoutes = require("./routes/users");
const newsRoutes = require("./routes/news");

const authMiddleware = require("./middlewares/auth");

mongoConnection();

app.get("/", (_, res) => {
  res.status(200).send("Welcome to the news API");
});

app.use(authMiddleware);

app.use("/users", userRoutes);
app.use("/news", newsRoutes);

app.listen(port, (err) => {
  if (err) {
    return console.log("Something bad happened", err);
  }
  console.log(`Server is listening on ${port}`);
});

module.exports = app;
