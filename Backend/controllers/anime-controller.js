const Anime = require("./Anime");

const addAnime = async (req, res, next) => {
  const { name, seasons, chapters_seen, review, favorite_character } = req.body;
  let book;
  try {
    book = new Anime({
      name,
      seasons,
      chapters_seen,
      review,
      favorite_character,
    });
    await book.save();
  } catch (e) {
    console.log(e);
  }

  if (!book) {
    return res.status(500).json({ message: "Unable to add book" });
  }
  return res.status(201).json({ book });
};

exports.addAnime = addAnime;
