const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const animeSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  seasons: {
    type: Number,
    required: true,
  },
  chapters_seen: {
    type: Number,
    required: true,
  },
  review: {
    type: String,
    required: true,
  },
  favorite_character: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Anime", animeSchema);
