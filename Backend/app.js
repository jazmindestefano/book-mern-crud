require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/book-routes");
const cors = require("cors");

const app = express();

// Middlewares
app.use(express.json());
app.use(
  cors({
    origin: [
      "http://localhost:5000",
      "https://book-mern-crud-backend.onrender.com",
    ],
  })
);
app.use("/books", router); // localhost:5000/books

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("connected to db"))
  .then(() => {
    app.listen(5000);
  })
  .catch((err) => console.log(err));
