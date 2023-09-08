const express = require("express");
const router = express.Router();

const animeController = require("../controllers/anime-controller");

router.post("/add-anime", animeController.addAnime);

module.exports = router;
