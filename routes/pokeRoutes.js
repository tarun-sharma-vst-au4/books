const express = require("express");

const {
  getAllPokemon,
  createPokemon,
  checkBody,
  checkID,
  getPokemon,
  updatePokemon,
} = require("../controller/pokeController");

const router = express.Router();

router.param("id", checkID);
router.route("/").get(getAllPokemon).post(checkBody, createPokemon);

router.route("/:id").get(getPokemon).patch(updatePokemon);

module.exports = router;
