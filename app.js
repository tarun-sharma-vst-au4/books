const express = require("express");
const morgan = require("morgan");
const app = express();
const pokeRouter = require("./routes/pokeRoutes");

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
app.use(express.json());

app.use("/api/v1/pokemons", pokeRouter);

module.exports = app;
