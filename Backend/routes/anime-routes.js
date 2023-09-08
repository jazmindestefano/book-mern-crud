const express = require("express");
const router = express.Router();

const animeController = require("../controllers/anime-controller");

router.get("/", animeController.getAllAnime);
router.post("/", animeController.addAnime);

module.exports = router;
