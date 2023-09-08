const Anime = require("../model/Anime");

const addAnime = async (req, res, next) => {
  const { name, seasons, chapters_seen, review, favorite_character } = req.body;
  let anime;
  try {
    anime = new Anime({
      name,
      seasons,
      chapters_seen,
      review,
      favorite_character,
    });
    await anime.save();
  } catch (e) {
    console.log(e);
  }

  if (!anime) {
    return res.status(500).json({ message: "Unable to add anime" });
  }
  return res.status(201).json({ anime });
};

exports.addAnime = addAnime;
