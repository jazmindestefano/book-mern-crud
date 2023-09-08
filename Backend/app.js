require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const booksRouter = require("./routes/book-routes");
const animeRouter = require("./routes/anime-routes");
const cors = require("cors");

const app = express();

// Middlewares
app.use(express.json());
app.use(cors());
app.use("/books", booksRouter);
app.use("/anime", animeRouter);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("connected to db"))
  .then(() => {
    app.listen(5000);
  })
  .catch((err) => console.log(err));
